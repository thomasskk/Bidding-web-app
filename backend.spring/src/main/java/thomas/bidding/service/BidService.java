
package thomas.bidding.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import thomas.bidding.model.Bid;
import thomas.bidding.repoSpec.BidRepoSpec;

@Service

public class BidService {
  @Autowired private BidRepoSpec bidRepoSpec;
  @Autowired private UserService userService;

  public Iterable<Bid> getBidByItemId(int itemId, int slice) {
    Pageable limit = PageRequest.of(0, slice);
    Page<Bid> page = bidRepoSpec.findByItemIdOrderByDateAsc(itemId, limit);
    return page.getContent();
  }

  public void addBid(Bid bid) { bidRepoSpec.save(bid); }
}