package thomas.bidding.Specification;
import org.springframework.data.jpa.domain.Specification;
import thomas.bidding.Model.Item;

public interface ItemSpecification {

  default Specification<Item> nameLike(String name) {
    return (Item, query, cb) -> {
      if (name != "null") {
        return cb.like(Item.get("name"), "%" + name + "%");
      } else {
        return null;
      }
    };
  }

  default Specification<Item> categoryLike(String category) {
    return (Item, query, cb) -> {
      if (!category.equals("All")) {
        return cb.equal(Item.get("category").get("name"), category);
      } else {
        return null;
      }
    };
  }
}