package thomas.bidding.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import thomas.bidding.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

    Iterable<User> findAll();

    Optional<User> findByuserId(int id);

}
