package thomas.bidding.Model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
import lombok.Data;

@Entity
@Data
@Table(name = "ITEMS")
public class Item {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	public int itemId;
	public String name;
	public String description;
	public Date  biddingOpeningDate;
	public Date  biddingEndingDate;
	public Long initialPrice;
	public Long sellPrice;
	public int userId;
	public int categoryId;
}