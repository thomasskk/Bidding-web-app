package thomas.bidding.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import thomas.bidding.model.Item;

@Repository
public interface ItemRepository extends CrudRepository<Item, Integer> {

}
