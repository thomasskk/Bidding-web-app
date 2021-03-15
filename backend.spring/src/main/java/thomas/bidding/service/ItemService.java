package thomas.bidding.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import thomas.bidding.Model.Item;
import thomas.bidding.Repository.ItemRepository;

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

    public Specification<Item> nameEqual(String name) {
        return (Item, query, cb) -> cb.like(Item.get("name"), "%" + name + "%");
    }

    public Iterable<Item> SearchNameSlice(String name, int slice) {
        Pageable limit = PageRequest.of(slice, 10);
        Page<Item> page = itemRepository.findAll(nameEqual(name), limit);
        return page.getContent();
    }
}
