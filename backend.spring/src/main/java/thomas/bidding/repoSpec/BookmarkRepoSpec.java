package thomas.bidding.repoSpec;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import thomas.bidding.model.Bookmark;


@Repository
public interface BookmarkRepoSpec extends JpaRepository<Bookmark, Integer>,
                                          JpaSpecificationExecutor<Bookmark> {

  public void deleteByItemId(int id);
  public Iterable<Bookmark> findByUserId(int id);
  public Iterable<Bookmark> findByItemId(int id);
}
