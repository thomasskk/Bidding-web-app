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
@RequestMapping("bookmark")
public class BookmarkController {

  @Autowired private BookmarkService bookmarkService;

  @PostMapping
  public void addOne(@RequestParam int id) {
    bookmarkService.addBookmark(id);
  }

  @DeleteMapping
  public void deleteOne(@RequestParam int id) {
    bookmarkService.removeBookmark(id);
  }

  @GetMapping
  public Iterable<Bookmark> getOne() {
    return bookmarkService.getBookmarkByUserId();
  }
}
