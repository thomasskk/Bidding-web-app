package thomas.bidding.model;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
  public Float askPrice;
  public Float lastBid;
  public int userId;
  public String imageUrl;

  @ManyToOne @JoinColumn(name = "categoryId") private Category category;
}