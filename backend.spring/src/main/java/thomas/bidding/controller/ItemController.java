package thomas.bidding.Controller;

import org.springframework.web.bind.annotation.RestController;

import thomas.bidding.Model.Item;
import thomas.bidding.Service.ItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class ItemController {

	@Autowired
	private ItemService itemService;

	@PostMapping("/registerAllItem")
	public void saveAll(@RequestBody Iterable<Item> IterableItem) {
		itemService.SaveAllItem(IterableItem);
	}

	@GetMapping("/item")
	public Iterable<Item> findAll() {
		return itemService.findAllItem();
	}

	@GetMapping("/item/{slice}")
	public Iterable<Item> findAll(@PathVariable int slice) {
		return itemService.itemSlice(slice);
	}
}
