package thomas.bidding.repositories;

import java.time.LocalDate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import thomas.bidding.model.Bid;

@Repository
public interface BidRepository extends CrudRepository<Bid, Integer> {

  Page<Bid> findAllByItemIdAndDateAfterOrderByDateDesc(int itemId,
                                                       LocalDate date,
                                                       Pageable limit);
}
