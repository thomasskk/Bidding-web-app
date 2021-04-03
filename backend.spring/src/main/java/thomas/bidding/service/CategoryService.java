package thomas.bidding.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import thomas.bidding.Model.Category;
import thomas.bidding.RepoSpec.CategoryRepoSpec;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepoSpec categoryRepository;

    public Iterable<Category> findAllCategory() {
        return categoryRepository.findAll();
    }
    
    public void SaveAllCategory(Iterable<Category> IterableCategory) {
        categoryRepository.saveAll(IterableCategory);
    }
}
