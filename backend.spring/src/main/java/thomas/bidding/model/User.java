package thomas.bidding.model;

import java.util.Collection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Data
@Table(name = "USERS")
public class User implements UserDetails {
  /**
   *
   */
  private static final long serialVersionUID = 1L;

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) public int id;
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

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return null;
  }
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }
  @Override
  public boolean isAccountNonLocked() {
    return true;
  }
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }
  @Override
  public boolean isEnabled() {
    return true;
  }
}
