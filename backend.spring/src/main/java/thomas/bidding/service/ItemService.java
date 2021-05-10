package thomas.bidding.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import thomas.bidding.model.Item;
import thomas.bidding.repositories.ItemRepository;
import thomas.bidding.service.specification.ItemSpecification;
import thomas.bidding.service.specification.SearchCriteria;
import thomas.bidding.service.specification.SearchOperation;

@Service
public class ItemService {

  @Autowired private ItemRepository itemRepository;

  public Iterable<Item> filter(String name, int slice, List<String> category,
                               Integer amount, Double priceMin,
                               Double priceMax) {

    Pageable page = PageRequest.of(slice, amount);
    ItemSpecification<Item> spec = new ItemSpecification<Item>();

    spec.add(new SearchCriteria("name", name, SearchOperation.MATCH));
    spec.add(new SearchCriteria("askPrice", priceMax,
                                SearchOperation.LESS_THAN_EQUAL));
    spec.add(new SearchCriteria("askPrice", priceMin,
                                SearchOperation.GREATER_THAN_EQUAL));

    return itemRepository.findAll(spec, page).getContent();
  }

  public Optional<Item> findById(int id) { return itemRepository.findById(id); }
}