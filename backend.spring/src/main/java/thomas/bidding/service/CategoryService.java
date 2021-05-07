package thomas.bidding.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thomas.bidding.model.Category;
import thomas.bidding.repositories.CategoryRepository;

@Service
public class CategoryService {

  @Autowired private CategoryRepository categoryRepository;

  public Iterable<Category> findAllCategory() {
    return categoryRepository.findAll();
  }
}
