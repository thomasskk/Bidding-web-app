package thomas.bidding.Controller;

import thomas.bidding.Model.Item;
import thomas.bidding.Service.ItemService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class ItemController {

	@Autowired
	private ItemService itemService;

	@GetMapping("item/{category}/{slice}/{name}")
	public Iterable<Item> findByNameSlice(@PathVariable int category, @PathVariable int slice,
			@PathVariable String name) {
		return itemService.SearchByNameCategory(name, slice, category);
	}

	@GetMapping("item/{category}/{slice}/")
	public Iterable<Item> findByNameSlice(@PathVariable int category, @PathVariable int slice) {
		return itemService.SearchByCategory(slice, category);
	}
}
