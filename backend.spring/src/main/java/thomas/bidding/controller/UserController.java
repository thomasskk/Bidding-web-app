package thomas.bidding.Controller;

import org.springframework.web.bind.annotation.RestController;

import thomas.bidding.Model.User;
import thomas.bidding.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
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

}
