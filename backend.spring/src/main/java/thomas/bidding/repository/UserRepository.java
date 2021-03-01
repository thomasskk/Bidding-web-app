package thomas.bidding.repository;

import org.springframework.data.repository.CrudRepository;

import thomas.bidding.models.User;

public interface UserRepository extends CrudRepository<User, Long> {
    
    
}
