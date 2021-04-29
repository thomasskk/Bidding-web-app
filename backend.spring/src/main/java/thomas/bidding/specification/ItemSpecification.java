package thomas.bidding.specification;
import org.springframework.data.jpa.domain.Specification;
import thomas.bidding.model.Item;

public interface ItemSpecification {

  default Specification<Item> nameLike(String name) {
    return (Item, query, cb) -> {
      return cb.like(Item.get("name"), "%" + name + "%");
    };
  }

  default Specification<Item> categoryLike(String category) {
    return (Item, query, cb) -> {
      if (category.equals("All")) {
        return null;
      } else {
        return cb.equal(Item.get("category").get("name"), category);
      }
    };
  }
}
