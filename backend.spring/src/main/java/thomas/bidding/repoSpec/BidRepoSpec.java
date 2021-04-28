package thomas.bidding.repoSpec;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import thomas.bidding.model.Bid;

@Repository
public interface BidRepoSpec
    extends JpaRepository<Bid, Integer>, JpaSpecificationExecutor<Bid> {

  public Page<Bid> findByItemIdOrderByDateDesc(int id, Pageable pageable);
}
