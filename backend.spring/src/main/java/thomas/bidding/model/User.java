package thomas.bidding.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "USERS")
public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	public int userId;
	public String username;
	public String lastName;
	public String firstName;
	public String email;
	public Long phone;
	public String street;
	public String zip;
	public String city;
	public String password;
	public int credit;
}
