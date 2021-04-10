package thomas.bidding.model;

import lombok.Data;
import org.springframework.lang.NonNull;

@Data
public class UserAuth {

  @NonNull private String username;
  @NonNull private String password;
}
