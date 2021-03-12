package thomas.bidding.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import thomas.bidding.model.Category;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Integer> {

}
