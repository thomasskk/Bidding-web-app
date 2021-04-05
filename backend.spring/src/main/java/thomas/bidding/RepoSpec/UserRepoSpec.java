package thomas.bidding.repoSpec;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import thomas.bidding.model.User;


@Repository
public interface UserRepoSpec
    extends JpaRepository<User, Integer>, JpaSpecificationExecutor<User> {

  Optional<User> findByUsername(String username);
}
