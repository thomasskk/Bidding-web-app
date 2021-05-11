package thomas.bidding.model;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "ITEMS")
public class Item {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) public int id;
  public String name;
  public String description;
  public LocalDateTime startDate;
  public LocalDateTime endDate;
  public Float listPrice;
  public Float lastBid;
  public int userId;
  public String imageUrl;
  public int views;
  public int bookmarked;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "categoryId")
  private Category category;

  @OneToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "userId", insertable = false, updatable = false)
  private User user;
}