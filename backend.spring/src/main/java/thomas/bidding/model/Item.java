package thomas.bidding.model;

import java.util.Date;
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
  public Date biddingOpeningDate;
  public Date biddingEndingDate;
  public Long basePrice;
  public Long sellPrice;
  public Long askPrice;
  public int userId;
  public String imageUrl;

  @ManyToOne @JoinColumn(name = "categoryId") private Category category;
}