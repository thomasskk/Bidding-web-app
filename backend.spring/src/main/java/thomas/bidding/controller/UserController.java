package thomas.bidding.controller;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import thomas.bidding.model.User;
import thomas.bidding.model.UserAuth;
import thomas.bidding.service.AuthService;

@RestController
public class UserController {

  @Autowired private AuthService userService;

  @PostMapping("login")
  public String login(@RequestBody @Valid UserAuth req) {
    return userService.login(req);
  }

  @PostMapping("register")
  public String register(@RequestBody @Valid User req) {
    return userService.register(req);
  }

  @PostMapping("tokenValidation")
  public void tokenValidation() {}
}
