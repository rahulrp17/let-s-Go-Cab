package Barath.com.Let.s.Go.Cab.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String licenseNumber;
    private String password;

    private double lat;
    private double lng;

    private String status; // e.g., "approved", "pending"

    private String vehicleType; // e.g., SUV, Sedan
    private String vehicleModel;
    private String plateNumber;

    private double baseFare;
    private double perKmRate;
    private String role = "DRIVER";  // default

}
