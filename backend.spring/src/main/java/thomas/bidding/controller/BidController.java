package thomas.bidding.controller;
import javax.validation.Valid;
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
@RequestMapping("bid/")
public class BidController {

  @Autowired private BidService bidService;

  @GetMapping("get")
  public Iterable<Bid> getBookmarkByUserId(@RequestParam int itemId,
                                           @RequestParam int slice) {
    return bidService.getBidByItemId(itemId, slice);
  }

  @PostMapping("add")
  public void addBid(@RequestBody @Valid Bid bid) {
    bidService.addBid(bid);
  }
}