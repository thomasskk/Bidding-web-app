package thomas.bidding.controller;

import javax.validation.Valid;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import thomas.bidding.model.Bid;
import thomas.bidding.service.BidService;


@RestController
@RequestMapping("bid")
public class BidController {

  @Autowired private BidService bidService;

  @GetMapping
  @SneakyThrows
  public Iterable<Bid> filter(@RequestParam int itemId, @RequestParam int slice,
                              @RequestParam int day) {
    return bidService.FindByItemIdAndDate(itemId, slice, day);
  }

  @PostMapping
  public void addOne(@RequestBody @Valid Bid bid) {
    bidService.addBid(bid);
  }
}