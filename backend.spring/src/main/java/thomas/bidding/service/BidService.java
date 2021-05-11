
package thomas.bidding.service;
import java.time.LocalDateTime;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import thomas.bidding.model.Bid;
import thomas.bidding.repositories.BidRepository;

@Service
public class BidService {

  @Autowired private BidRepository bidRepository;

  @SneakyThrows
  public Iterable<Bid> FindByItemIdAndDate(int itemId, int slice, int day) {
    Pageable limit = PageRequest.of(slice, 30, Sort.by(Direction.DESC, "date"));

    return bidRepository
        .findAllByItemIdAndDateAfter(itemId, LocalDateTime.now().minusDays(day),
                                     limit)
        .getContent();
  }

  public void addBid(Bid bid) { bidRepository.save(bid); }
}