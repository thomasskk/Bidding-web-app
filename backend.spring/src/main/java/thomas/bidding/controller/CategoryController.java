package thomas.bidding.controller;

import org.springframework.web.bind.annotation.RestController;
import thomas.bidding.model.Category;
import thomas.bidding.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class CategoryController {

	@Autowired
	private CategoryService categoryService;

	@PostMapping("/registerAllCategory")
	public void saveAll(@RequestBody Iterable<Category> IterableCategory) {
		categoryService.SaveAllCategory(IterableCategory);
	}

	@GetMapping("/category")
	public Iterable<Category> findAll() {
		return categoryService.findAllCategory();
	}
}
