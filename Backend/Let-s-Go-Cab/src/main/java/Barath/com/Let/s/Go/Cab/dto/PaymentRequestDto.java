package Barath.com.Let.s.Go.Cab.dto;

import lombok.Data;

@Data
public class PaymentRequestDto {
    public double amount;
    public String currency = "INR";
    public String receipt;
    public String paymentMethod; // RAZORPAY, CASH, UPI
    public Long bookingId;
}