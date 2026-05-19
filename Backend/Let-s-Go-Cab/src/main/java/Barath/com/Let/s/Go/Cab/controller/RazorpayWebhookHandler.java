package Barath.com.Let.s.Go.Cab.controller;

import Barath.com.Let.s.Go.Cab.model.Payment;
import Barath.com.Let.s.Go.Cab.model.PaymentStatus;
import Barath.com.Let.s.Go.Cab.repository.PaymentRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/webhook")
public class RazorpayWebhookHandler {

    @Autowired
    private PaymentRepository paymentRepository;

    @PostMapping("/razorpay")
    public ResponseEntity<String> handleRazorpayWebhook(@RequestBody String payload) {
        try {
            JSONObject event = new JSONObject(payload);
            String eventType = event.getString("event");

            JSONObject entity = event.getJSONObject("payload")
                    .getJSONObject("payment")
                    .getJSONObject("entity");

            String razorpayOrderId = entity.getString("order_id");

            Payment payment = paymentRepository.findByRazorpayOrderId(razorpayOrderId)
                    .orElseThrow(() -> new RuntimeException("Payment not found"));

            if ("payment.captured".equals(eventType)) {
                payment.setStatus(PaymentStatus.SUCCESS);
            } else if ("payment.failed".equals(eventType)) {
                payment.setStatus(PaymentStatus.FAILED);
            }

            paymentRepository.save(payment);
            return ResponseEntity.ok("Payment status updated");

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(400).body("Error processing webhook");
        }
    }
}
