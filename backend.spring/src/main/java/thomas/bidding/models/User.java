package thomas.bidding.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;


@Entity
@Data
public class User {

	public @Id @GeneratedValue int no_utilisateur;
	public String pseudo;
	public String nom;
	public String prenom;
	public String email;
	public int telephone;
	public String rue;
	public String code_postal;
	public String ville;
	public String mot_de_passe;
	public int credit = 100;
	public byte administrateur;
}
