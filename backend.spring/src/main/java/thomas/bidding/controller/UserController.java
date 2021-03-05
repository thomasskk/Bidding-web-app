package thomas.bidding.controller;

import org.springframework.web.bind.annotation.RestController;
import thomas.bidding.model.User;
import thomas.bidding.repository.UserRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class UserController {

	@Autowired
	private UserRepository UserRepository;

	@RequestMapping("/login")
	public Iterable<User> login() {
		return UserRepository.findAll();
	}
	
	@RequestMapping("/register")
	public Optional<User> register() {
		return UserRepository.findByuserId(2);
	}
}