package thomas.bidding.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import thomas.bidding.model.Bookmark;
import thomas.bidding.service.BookmarkService;

@RestController
public class BookmarkController {

  @Autowired private BookmarkService bookmarkService;

  @PostMapping("bookmark/add/{itemId}")
  public void addBookmark(@PathVariable int itemId) {
    bookmarkService.addBookmark(itemId);
  }

  @PostMapping("bookmark/remove/{itemId}")
  public void removeBookmark(@PathVariable int itemId) {
    bookmarkService.removeBookmark(itemId);
  }

  @GetMapping("bookmark/get")
  public Iterable<Bookmark>  getBookmarkByUserId() {
    return bookmarkService.getBookmarkByUserId();
  }
}
