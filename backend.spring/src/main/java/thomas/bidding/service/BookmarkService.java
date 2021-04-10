package thomas.bidding.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import thomas.bidding.model.Bookmark;
import thomas.bidding.repoSpec.BookmarkRepoSpec;

@Service
public class BookmarkService {
  @Autowired private BookmarkRepoSpec bookmarkRepoSpec;
  @Autowired private UserService userService;

  public void addBookmark(int itemId) {
    Bookmark bookmark = new Bookmark();
    bookmark.setUserId(userService.getUserId());
    bookmark.setItemId(itemId);
    System.out.println(bookmark);
    bookmarkRepoSpec.save(bookmark);
  }
  @Transactional
  public void removeBookmark(int itemId) {
    bookmarkRepoSpec.deleteByItemId(itemId);
  }
  public Iterable<Bookmark> getBookmarkByUserId() {
    return bookmarkRepoSpec.findByUserId(userService.getUserId());
  }
}
