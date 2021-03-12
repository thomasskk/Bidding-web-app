package thomas.bidding.controller;

import org.springframework.web.bind.annotation.RestController;
import thomas.bidding.model.Item;
import thomas.bidding.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = { "http://localhost:3000"})
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
}
