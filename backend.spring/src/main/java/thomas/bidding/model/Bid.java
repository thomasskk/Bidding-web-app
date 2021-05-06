package thomas.bidding.model;
import java.util.Date;
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
@Table(name = "BID")
public class Bid {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) public int id;
  public Date date;
  public Long price;
  @OneToOne @JoinColumn(name = "userId") private User user;
  @OneToOne @JoinColumn(name = "itemId") private Item item;
}