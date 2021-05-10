package thomas.bidding.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import thomas.bidding.model.Item;
import thomas.bidding.repositories.ItemRepository;
import thomas.bidding.service.specification.EntitySpecification;
import thomas.bidding.service.specification.SearchCriteria;
import thomas.bidding.service.specification.SearchOperation;

@Service
public class ItemService {

  @Autowired private ItemRepository itemRepository;
  private Sort sort;
  private Direction direction;

  public Iterable<Item> filter(String name, int slice, List<String> category,
                               Integer amount, Double priceMin, Double priceMax,
                               String sortAttribute, String sortDirection) {

    direction = sortDirection.equals("ASC") ? Direction.ASC : Direction.DESC;
    sort = sortAttribute == null ? Sort.unsorted()
                                 : Sort.by(direction, sortAttribute);

    Pageable page = PageRequest.of(slice, amount, sort);

    EntitySpecification<Item> spec = new EntitySpecification<Item>();

    spec.add(new SearchCriteria("name", name, SearchOperation.MATCH));
    spec.add(new SearchCriteria("listPrice", priceMax,
                                SearchOperation.LESS_THAN_EQUAL));
    spec.add(new SearchCriteria("listPrice", priceMin,
                                SearchOperation.GREATER_THAN_EQUAL));

    return itemRepository.findAll(spec, page).getContent();
  }

  public Optional<Item> findById(int id) { return itemRepository.findById(id); }
}