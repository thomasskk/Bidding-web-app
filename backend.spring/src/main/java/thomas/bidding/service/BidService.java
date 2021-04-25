
package thomas.bidding.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thomas.bidding.model.Bid;
import thomas.bidding.repoSpec.BidRepoSpec;

@Service

public class BidService {
  @Autowired private BidRepoSpec bidRepoSpec;
  @Autowired private UserService userService;

  public Iterable<Bid> getBidByItemId(int itemId) {
    return bidRepoSpec.findByItemId(itemId);
  }

  public void addBid(Bid bid) {
      bidRepoSpec.save(bid);
     }
}