package thomas.bidding.Controller;

import org.springframework.web.bind.annotation.RestController;

import thomas.bidding.Model.Category;
import thomas.bidding.Service.CategoryService;

import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class CategoryController {

	@Autowired
	private CategoryService categoryService;

	@GetMapping("/category")
	public Iterable<Category> findAll() {
		return categoryService.findAllCategory();
	}
}
