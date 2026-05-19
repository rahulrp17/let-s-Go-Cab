package Barath.com.Let.s.Go.Cab.controller;

import Barath.com.Let.s.Go.Cab.dto.PaymentRequestDto;
import Barath.com.Let.s.Go.Cab.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/razorpay")
    public String createRazorpayOrder(@RequestBody PaymentRequestDto dto) throws Exception {
        return paymentService.createRazorpayOrder(dto);
    }

    @PostMapping("/cash/{bookingId}")
    public String handleCashPayment(@PathVariable Long bookingId) {
        paymentService.handleCashOnDrop(bookingId);
        return "Cash on drop recorded";
    }

    @PostMapping("/upi/{bookingId}")
    public String handleUpiManual(@PathVariable Long bookingId) {
        paymentService.handleManualUpi(bookingId);
        return "Manual UPI recorded";
    }
}