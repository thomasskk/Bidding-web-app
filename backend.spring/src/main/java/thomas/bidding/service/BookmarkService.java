package thomas.bidding.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import thomas.bidding.model.Bookmark;
import thomas.bidding.repositories.BookmarkRepositorty;

@Service
public class BookmarkService {
  @Autowired private BookmarkRepositorty bookmarkRepository;
  @Autowired private UserService userService;

  public void addBookmark(int itemId) {
    Bookmark bookmark = new Bookmark();
    bookmark.setUserId(userService.getUserId());
    bookmark.setItemId(itemId);
    System.out.println(bookmark);
    bookmarkRepository.save(bookmark);
  }
  @Transactional
  public void removeBookmark(int itemId) {
    bookmarkRepository.deleteByItemId(itemId);
  }
  public Iterable<Bookmark> getBookmarkByUserId() {
    return bookmarkRepository.findByUserId(userService.getUserId());
  }
}
