package thomas.bidding.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import thomas.bidding.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

}
