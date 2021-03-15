package thomas.bidding.Controller;

import thomas.bidding.Model.Item;
import thomas.bidding.Service.ItemService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class ItemController {

	@Autowired
	private ItemService itemService;

	@GetMapping("item/{slice}/{name}")
	public Iterable<Item> findByNameSlice(@PathVariable int slice, @PathVariable String name) {
		return itemService.SearchNameSlice(name, slice);
	}

	@GetMapping("item/{slice}")
	public Iterable<Item> findAllSlice(@PathVariable int slice) {
		return itemService.findAllItem(slice);
	}

}
