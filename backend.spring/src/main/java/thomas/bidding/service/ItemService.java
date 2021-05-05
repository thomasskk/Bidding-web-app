package thomas.bidding.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import thomas.bidding.model.Item;
import thomas.bidding.repoSpec.ItemRepoSpec;
import thomas.bidding.specification.ItemSpecification;

@Service
public class ItemService implements ItemSpecification {

  @Autowired private ItemRepoSpec itemRepoSpec;

  public Iterable<Item> filterNameCategory(String name, int slice,
                                           String category, int amount) {
    Pageable limit = PageRequest.of(slice, amount);
    Specification<Item> spec =
        Specification.where((nameLike(name)).and(categoryLike(category)));
    Page<Item> page = itemRepoSpec.findAll(spec, limit);
    return page.getContent();
  }

  public Optional<Item> findById(int id) { return itemRepoSpec.findById(id); }
}