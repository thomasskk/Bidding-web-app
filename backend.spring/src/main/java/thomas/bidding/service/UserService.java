package thomas.bidding.Service;

import javax.validation.ValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import thomas.bidding.Model.User;
import thomas.bidding.RepoSpec.UserRepoSpec;

@Service
public class UserService {

  @Autowired private UserRepoSpec userRepoSpec;
  @Autowired private PasswordEncoder passwordEncoder;

  public void create(User user) throws ValidationException {
    if (userRepoSpec.findByUsername(user.getUsername()).isPresent()) {
      throw new ValidationException("Username already exists");
    }

    user.setPassword(passwordEncoder.encode(user.getPassword()));
    userRepoSpec.save(user);
  }
}