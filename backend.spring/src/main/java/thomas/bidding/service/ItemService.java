package thomas.bidding.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import thomas.bidding.Model.Item;
import thomas.bidding.Repository.ItemRepository;
import org.springframework.data.jpa.domain.Specification;

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

    private Specification<Item> slicer(int slice) {
        return (Item, query, cb) -> {
            return cb.between(Item.get("itemId"), slice+1, slice+10);
        };
    }

    public Iterable<Item> itemSlice(int slice) {
        return itemRepository.findAll(slicer(slice));
    }


}
