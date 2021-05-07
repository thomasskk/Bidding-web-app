
package thomas.bidding.service;
import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import thomas.bidding.model.Bid;
import thomas.bidding.repositories.BidRepository;

@Service
public class BidService {

  @Autowired private BidRepository bidRepository;

  public Iterable<Bid> FindByItemIdAndDate(int itemId, int slice, int day) {
    Pageable limit = PageRequest.of(slice, 30);

    return bidRepository
        .findAllByItemIdAndDateAfterOrderByDateDesc(
            itemId, LocalDate.now().minusDays(day), limit)
        .getContent();
  }

  public void addBid(Bid bid) { bidRepository.save(bid); }
}