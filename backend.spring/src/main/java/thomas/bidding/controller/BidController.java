package thomas.bidding.controller;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import thomas.bidding.model.Bid;
import thomas.bidding.service.BidService;

@RestController
@RequestMapping("bid/")
public class BidController {

  @Autowired private BidService bidService;

  @GetMapping("get/{itemId}")
  public Iterable<Bid> getBookmarkByUserId(@PathVariable int itemId) {
    return bidService.getBidByItemId(itemId);
  }

  @PostMapping("add")
  public void addBid(@RequestBody @Valid Bid bid) {
    bidService.addBid(bid);
  }
}