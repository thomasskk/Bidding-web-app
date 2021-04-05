package thomas.bidding.repoSpec;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import thomas.bidding.model.Category;

@Repository
public interface CategoryRepoSpec extends JpaRepository<Category, Integer>,
                                          JpaSpecificationExecutor<Category> {}
