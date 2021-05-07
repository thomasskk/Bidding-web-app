package thomas.bidding.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import thomas.bidding.model.Item;
import thomas.bidding.repositories.ItemRepository;

@Service
public class ItemService {

  @Autowired private ItemRepository itemRepository;

  public Iterable<Item> filterNameCategory(String name, int slice,
                                           List<String> category, int amount) {
    Pageable limit = PageRequest.of(slice, amount);
    if (category.isEmpty()) {
      return itemRepository.findAllByNameContaining(name, limit).getContent();
    }
    return itemRepository
        .findAllByCategoryNameInAndNameContaining(category, name, limit)
        .getContent();
  }

  public Optional<Item> findById(int id) { return itemRepository.findById(id); }
}