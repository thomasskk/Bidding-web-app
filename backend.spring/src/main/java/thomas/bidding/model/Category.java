package thomas.bidding.Model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "CATEGORY")
public class Category {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	public int categoryId;
	public String name;
}
