package thomas.bidding.Controller;

import org.springframework.web.bind.annotation.RestController;

import thomas.bidding.Model.User;
import thomas.bidding.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("user/login/{username}/{password}")
	public void login(@PathVariable String username,@PathVariable String password ) {
		userService.login(username, password);
	}

	@PostMapping("user/register/")
	public void register(@PathVariable User user) {
		userService.register(user);
	}


}
