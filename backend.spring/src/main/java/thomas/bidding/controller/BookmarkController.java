package thomas.bidding.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import thomas.bidding.model.Bookmark;
import thomas.bidding.service.BookmarkService;

@RestController
@RequestMapping("bookmark/")
public class BookmarkController {

  @Autowired private BookmarkService bookmarkService;

  @PostMapping("add")
  public void addBookmark(@RequestParam int id) {
    bookmarkService.addBookmark(id);
  }

  @DeleteMapping("remove")
  public void removeBookmark(@RequestParam int id) {
    bookmarkService.removeBookmark(id);
  }

  @GetMapping("get")
  public Iterable<Bookmark> getBookmarkByUserId() {
    return bookmarkService.getBookmarkByUserId();
  }
}
