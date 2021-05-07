package thomas.bidding.repositories;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import thomas.bidding.model.Item;

@Repository
public interface ItemRepository extends CrudRepository<Item, Integer> {

  Page<Item> findAllByCategoryNameInAndNameContaining(List<String> category,
                                                      String name,
                                                      Pageable limit);

  Page<Item> findAllByNameContaining(String name, Pageable limit);
}
