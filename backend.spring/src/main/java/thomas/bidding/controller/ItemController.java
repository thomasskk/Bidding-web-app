package thomas.bidding.controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import thomas.bidding.model.Item;
import thomas.bidding.service.ItemService;

@RestController
@RequestMapping("item/")
public class ItemController {

  @Autowired private ItemService itemService;

  @GetMapping("filter")
  public Iterable<Item> filterNameCategory(@RequestParam String category,
                                           @RequestParam int slice,
                                           @RequestParam String input) {
    return itemService.filterNameCategory(input, slice, category);
  }

  @GetMapping("get")
  public Optional<Item> findById(@RequestParam int id) {
    return itemService.findById(id);
  }
}