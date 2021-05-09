package thomas.bidding.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import thomas.bidding.model.Item;
import thomas.bidding.service.ItemService;


@RestController
@RequestMapping("item")
public class ItemController {

  @Autowired private ItemService itemService;

  @GetMapping("/filter")
  public Iterable<Item> filterNameCategory(
      @RequestParam(required = false,
                    name = "category[]", defaultValue = "") List<String> category,
      @RequestParam(required = false, defaultValue = "") String input,
      @RequestParam int slice, @RequestParam int amount) {
    System.out.println(category);
    return itemService.filterNameCategory(input, slice, category, amount);
  }

  @GetMapping
  public Optional<Item> findById(@RequestParam int id) {
    return itemService.findById(id);
  }
}
