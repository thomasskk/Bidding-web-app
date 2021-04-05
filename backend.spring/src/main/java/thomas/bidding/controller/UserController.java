package thomas.bidding.controller;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import thomas.bidding.model.User;
import thomas.bidding.model.UserAuth;
import thomas.bidding.security.JwtTokenUtil;
import thomas.bidding.service.UserService;


@RestController
public class UserController {

  @Autowired private UserService userService;
  @Autowired private JwtTokenUtil jwtTokenUtil;
  @Autowired private AuthenticationManager authenticationManager;

  @PostMapping("login")
  public ResponseEntity<String> login(@RequestBody @Valid UserAuth request) {
    try {
      authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(request.getUsername(),
                                                  request.getPassword()));

      String token = jwtTokenUtil.generateToken(request.getUsername());

      return ResponseEntity.ok(token);

    } catch (Exception e) {
      System.out.println(e);
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
  }

  @PostMapping("register")
  public void register(@RequestBody @Valid User request) {
    userService.create(request);
  }
}
