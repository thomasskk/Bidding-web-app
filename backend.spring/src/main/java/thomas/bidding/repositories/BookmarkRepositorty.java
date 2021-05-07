package thomas.bidding.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import thomas.bidding.model.Bookmark;

@Repository
public interface BookmarkRepositorty extends CrudRepository<Bookmark, Integer> {

  public void deleteByItemId(int id);
  public Iterable<Bookmark> findByUserId(int id);
  public Iterable<Bookmark> findByItemId(int id);
}
