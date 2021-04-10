package thomas.bidding.service;

import javax.validation.ValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import thomas.bidding.model.User;
import thomas.bidding.model.UserAuth;
import thomas.bidding.repoSpec.UserRepoSpec;
import thomas.bidding.security.JwtTokenUtil;

@Service
public class AuthService {

  @Autowired private UserRepoSpec userRepoSpec;
  @Autowired private PasswordEncoder passwordEncoder;
  @Autowired private JwtTokenUtil jwtTokenUtil;
  @Autowired private AuthenticationManager authenticationManager;

  public String register(User user) throws ValidationException {
    if (userRepoSpec.findByUsername(user.getUsername()).isPresent() ||
        userRepoSpec.findByEmail(user.getEmail()).isPresent()) {
      throw new ValidationException("Username/Email already exists");
    }
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    userRepoSpec.save(user);
    String token = jwtTokenUtil.generateToken(user.getUsername());

    return token;
  }

  public String login(UserAuth user) throws ValidationException {
    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
        user.getUsername(), user.getPassword()));

    String token = jwtTokenUtil.generateToken(user.getUsername());
    return token;
  }

}