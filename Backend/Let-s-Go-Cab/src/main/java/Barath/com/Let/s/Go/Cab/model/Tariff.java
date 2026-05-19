package Barath.com.Let.s.Go.Cab.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tariff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int luggage;
    private double waitingChargePerMin;
    private double oneWayRatePerKm;
    private double roundTripRatePerKm;
    private double driverBata;
    private String vehicleType;
}
