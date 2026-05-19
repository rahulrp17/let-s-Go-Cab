package Barath.com.Let.s.Go.Cab.model;



import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    @Column(nullable = false, unique = true)
    private String email;
    private String role = "ROLE_ADMIN";
}
