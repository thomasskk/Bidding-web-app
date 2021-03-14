package thomas.bidding.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import thomas.bidding.Model.Category;
import thomas.bidding.Repository.CategoryRepository;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Iterable<Category> findAllCategory() {
        return categoryRepository.findAll();
    }

    public void SaveAllCategory(Iterable<Category> IterableCategory) {
        categoryRepository.saveAll(IterableCategory);
    }
}
