package thomas.bidding.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thomas.bidding.model.Category;
import thomas.bidding.repoSpec.CategoryRepoSpec;


@Service
public class CategoryService {

  @Autowired private CategoryRepoSpec categoryRepository;

  public Iterable<Category> findAllCategory() {
    return categoryRepository.findAll();
  }

  public void SaveAllCategory(Iterable<Category> IterableCategory) {
    categoryRepository.saveAll(IterableCategory);
  }
}
