package thomas.bidding.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thomas.bidding.model.User;
import thomas.bidding.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Iterable<User> findAllUser() {
        return userRepository.findAll();
    }

    public void SaveAllUser(Iterable<User> IterableUser) {
        userRepository.saveAll(IterableUser);
    }
}
