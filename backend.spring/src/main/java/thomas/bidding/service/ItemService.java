package thomas.bidding.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thomas.bidding.model.Item;
import thomas.bidding.repository.ItemRepository;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public Iterable<Item> findAllItem() {
        return itemRepository.findAll();
    }

    public void SaveAllItem(Iterable<Item> IterableItem) {
        itemRepository.saveAll(IterableItem);
    }
}
