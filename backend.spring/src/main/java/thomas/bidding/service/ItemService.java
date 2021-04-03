package thomas.bidding.Service;

import thomas.bidding.Model.Item;
import thomas.bidding.RepoSpec.ItemRepoSpec;
import thomas.bidding.Specification.ItemSpecification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

@Service
public class ItemService implements ItemSpecification{
    
    @Autowired
    private ItemRepoSpec itemRepoSpec;

    public Iterable<Item> findAllItem(int slice) {
        Pageable limit = PageRequest.of(slice, 10);
        Page<Item> page = itemRepoSpec.findAll(limit);
        return page.getContent();
    }

    public Iterable<Item> SearchByNameCategory(String name, int slice, int category) {
        Pageable limit = PageRequest.of(slice, 10);
        Specification<Item> spec = Specification.where((nameLike(name)).and(categoryLike(category)));
        Page<Item> page = itemRepoSpec.findAll(spec, limit);
        return page.getContent();
    }

    public Iterable<Item> SearchByCategory(int slice, int category) {
        Pageable limit = PageRequest.of(slice, 10);
        Page<Item> page = itemRepoSpec.findAll(categoryLike(category), limit);
        return page.getContent();
    }

    public void SaveAllItem(Iterable<Item> IterableItem) {
        itemRepoSpec.saveAll(IterableItem);
    }
}