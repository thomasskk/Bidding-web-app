package thomas.bidding.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "USERS")
public class User {
	@Id 
	@GeneratedValue
	public int userId;
	public String pseudo;
	public String lastName;
	public String firstName;
	public String email;
	public int phone;
	public String street;
	public String zip;
	public String city;
	public String password;
	public int credit;
	public byte admin;
}
