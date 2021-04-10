package thomas.bidding.service;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import thomas.bidding.model.User;

@Service
public class UserService {

  public int getUserId() {
    Authentication authentication =
        SecurityContextHolder.getContext().getAuthentication();
    User user = (User)authentication.getPrincipal();
    return user.getId();
  }
}