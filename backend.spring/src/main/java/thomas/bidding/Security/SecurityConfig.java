package thomas.bidding.Security;
import static java.lang.String.format;

import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import thomas.bidding.RepoSpec.UserRepoSpec;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Autowired private UserRepoSpec userRepoSpec;
  @Autowired private JwtTokenFilter jwtTokenFilter;

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {

    auth.userDetailsService(
        username
        -> userRepoSpec.findByUsername(username).orElseThrow(
            ()
                -> new UsernameNotFoundException(
                    format("User: %s, not found", username))));
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {

    http = http.cors().and().csrf().disable();

    http = http.sessionManagement()
               .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
               .and();

    http = http.exceptionHandling()
               .authenticationEntryPoint((request, response, ex) -> {
                 response.sendError(HttpServletResponse.SC_UNAUTHORIZED,
                                    ex.getMessage());
               })
               .and();

    http.authorizeRequests()
        .antMatchers("/category","/item/**", "/login", "/register")
        .permitAll()
        .anyRequest()
        .authenticated();

    http.addFilterBefore(jwtTokenFilter,
                         UsernamePasswordAuthenticationFilter.class);
  }

  @Override
  @Bean
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }
}
