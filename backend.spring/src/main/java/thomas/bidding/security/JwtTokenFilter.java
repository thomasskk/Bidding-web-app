package thomas.bidding.security;
import java.io.IOException;
import java.util.List;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import thomas.bidding.repositories.UserRepository;


@Component
public class JwtTokenFilter extends OncePerRequestFilter {

  @Autowired private UserRepository userRepository;
  @Autowired private JwtTokenUtil jwtTokenUtil;

  @Override
  protected void doFilterInternal(HttpServletRequest req,
                                  HttpServletResponse res, FilterChain chain)
      throws ServletException, IOException {

    final String header = req.getHeader(HttpHeaders.AUTHORIZATION);
    if (header == null || !header.startsWith("Bearer ")) {
      chain.doFilter(req, res);
      return;
    }

    final String token = header.split(" ")[1].trim();
    if (!jwtTokenUtil.verifyToken(token)) {
      chain.doFilter(req, res);
      return;
    }

    UserDetails userDetails =
        userRepository.findByUsername(jwtTokenUtil.getUsername(token))
            .orElse(null);

    UsernamePasswordAuthenticationToken authentication =
        new UsernamePasswordAuthenticationToken(
            userDetails, null,
            userDetails == null ? List.of() : userDetails.getAuthorities());

    authentication.setDetails(
        new WebAuthenticationDetailsSource().buildDetails(req));

    SecurityContextHolder.getContext().setAuthentication(authentication);
    chain.doFilter(req, res);
  }
}