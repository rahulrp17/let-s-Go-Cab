package Barath.com.Let.s.Go.Cab.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;
    private String customerPhone;

    private String pickupLocation;
    private String dropLocation;

    private double pickupLat;
    private double pickupLng;

    private double dropLat;
    private double dropLng;

    private LocalDate pickupDate;
    private LocalTime pickupTime;
    private LocalDate returnDate; // required for round-trip


    private String selectedCarType;
    private String tripType; // one-way or round-trip

    private double luggageCharges; // in KG
    private int waitingCharges;
    private double tollAmount;

    private double fare;
    private String status = "pending";
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "driver_id")
    private Driver driver;
}
