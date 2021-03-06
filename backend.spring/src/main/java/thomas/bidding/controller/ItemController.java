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
  public Iterable<Item> filter(
      @RequestParam(name = "category[]",
                    defaultValue = "") List<String> category,
      @RequestParam(defaultValue = "") String input, @RequestParam int slice,
      @RequestParam int amount, @RequestParam(required = false) Double priceMin,
      @RequestParam(required = false) Double priceMax,
      @RequestParam(required = false) String sortAttribute,
      @RequestParam(required = false, defaultValue = "") String sortDirection) {

    return itemService.filter(input, slice, category, amount, priceMin,
                              priceMax, sortAttribute, sortDirection);
  }

  @GetMapping
  public Optional<Item> findOne(@RequestParam int id) {
    return itemService.findById(id);
  }
}
