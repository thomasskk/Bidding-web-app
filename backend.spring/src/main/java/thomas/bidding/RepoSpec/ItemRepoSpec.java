package thomas.bidding.RepoSpec;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import thomas.bidding.Model.Item;

@Repository
public interface ItemRepoSpec extends JpaRepository<Item, Integer>, JpaSpecificationExecutor<Item> {
    


}
