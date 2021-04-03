package thomas.bidding.RepoSpec;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import thomas.bidding.Model.User;

@Repository
public interface UserRepoSpec extends JpaRepository<User,Integer>, JpaSpecificationExecutor<User> {

}
