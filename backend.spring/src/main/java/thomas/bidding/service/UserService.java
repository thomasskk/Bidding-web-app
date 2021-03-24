package thomas.bidding.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import thomas.bidding.Model.User;
import thomas.bidding.Repository.UserRepository;

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

    public void login(String username, String password) {
    }

    public void register(User user) {
    }
}
