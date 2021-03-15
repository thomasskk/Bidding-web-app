package thomas.bidding.Service;

import thomas.bidding.Model.Item;
import thomas.bidding.Repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public Iterable<Item> findAllItem(int slice) {
        Pageable limit = PageRequest.of(slice, 10);
        Page<Item> page = itemRepository.findAll(limit);
        return page.getContent();
    }

    public Specification<Item> nameLike(String name) {
        System.out.println(name);
        return (Item, query, cb) -> name != "null" ? cb.like(Item.get("name"), "%" + name + "%") : null;
    }

    public Specification<Item> categoryEqual(int category) {
        return (Item, query, cb) -> category != 9 ? cb.equal(Item.get("categoryId"), category) : null;
    }

    public Iterable<Item> SearchByNameCategory(String name, int slice, int category) {
        Pageable limit = PageRequest.of(slice, 10);
        Specification<Item> spec = Specification.where((nameLike(name)).and(categoryEqual(category)));
        Page<Item> page = itemRepository.findAll(spec, limit);
        return page.getContent();
    }

    public Iterable<Item> SearchByCategory(int slice, int category) {
        Pageable limit = PageRequest.of(slice, 10);
        Page<Item> page = itemRepository.findAll(categoryEqual(category), limit);
        return page.getContent();
    }

    public void SaveAllItem(Iterable<Item> IterableItem) {
        itemRepository.saveAll(IterableItem);
    }
}