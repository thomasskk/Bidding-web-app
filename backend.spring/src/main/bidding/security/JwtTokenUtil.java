package thomas.bidding.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtTokenUtil {

  @Value("${jwt.secret}") private String secret;

  @Value("${jwt.expirationTime}") private String expirationTime;

  private Key key;

  @PostConstruct
  public void init() {
    this.key = Keys.hmacShaKeyFor(secret.getBytes());
    System.out.println(this.key);
  }

  public String generateToken(String username) {

    return Jwts.builder()
        .setSubject(username)
        .setIssuedAt(new Date())
        .setExpiration(new Date(System.currentTimeMillis() +
                                Integer.parseInt(expirationTime)))
        .signWith(key)
        .compact();
  }

  public boolean verifyToken(String token) {
    try {
      Jwts.parserBuilder().setSigningKey(this.key).build().parseClaimsJws(
          token);
      return true;
    } catch (Exception e) {
      System.out.println(e);
      return false;
    }
  }

  public String getUsername(String token) {
    return Jwts.parserBuilder()
        .setSigningKey(this.key)
        .build()
        .parseClaimsJws(token)
        .getBody()
        .getSubject();
  }
}
