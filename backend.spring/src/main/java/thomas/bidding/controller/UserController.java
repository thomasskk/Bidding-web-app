package thomas.bidding.controller;

import org.springframework.web.bind.annotation.RestController;
import thomas.bidding.model.User;
import thomas.bidding.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/registerAllUser")
	public void saveAll(@RequestBody Iterable<User> IterableUser) {
		userService.SaveAllUser(IterableUser);
	}

	@GetMapping("/user")
	public Iterable<User> findAll() {
		return userService.findAllUser();
	}
}
