package thomas.bidding.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Data;


@Entity
@Data
@Table(name = "USERS_BOOKMARK")
public class Bookmark {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) public int id;
  public int userId;
  public int itemId;
  @OneToOne @JoinColumn(name = "itemId", insertable = false, updatable = false) private Item item;
}