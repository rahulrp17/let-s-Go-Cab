package Barath.com.Let.s.Go.Cab.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String razorpayOrderId;
    private String razorpayPaymentId;
    private String razorpaySignature;

    @Enumerated(EnumType.STRING)
    private PaymentStatus status;

    private double amount;
    private LocalDateTime createdAt = LocalDateTime.now();
    private String paymentMode; // RAZORPAY, UPI, CASH


    @ManyToOne
    @JoinColumn(name = "bookingId")
    private Booking booking;
}
