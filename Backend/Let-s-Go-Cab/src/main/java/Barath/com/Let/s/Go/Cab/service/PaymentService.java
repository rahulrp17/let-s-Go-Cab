package Barath.com.Let.s.Go.Cab.service;

import Barath.com.Let.s.Go.Cab.dto.PaymentRequestDto;
import Barath.com.Let.s.Go.Cab.model.Booking;
import Barath.com.Let.s.Go.Cab.model.Payment;
import Barath.com.Let.s.Go.Cab.model.PaymentStatus;
import Barath.com.Let.s.Go.Cab.repository.BookingRepository;
import Barath.com.Let.s.Go.Cab.repository.PaymentRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class PaymentService {

    private final RazorpayClient razorpayClient;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    public PaymentService(@Value("${razorpay.key}") String key,
                          @Value("${razorpay.secret}") String secret) throws Exception {
        this.razorpayClient = new RazorpayClient(key, secret);
    }

    // Create Razorpay Order
    public String createRazorpayOrder(PaymentRequestDto dto) throws Exception {
        JSONObject options = new JSONObject();
        options.put("amount", (int)(dto.getAmount() * 100)); // amount in paise
        options.put("currency", dto.getCurrency());
        options.put("receipt", UUID.randomUUID().toString());

        Order order = razorpayClient.orders.create(options);

        Booking booking = bookingRepository.findById(dto.getBookingId())
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        Payment payment = new Payment();
        payment.setRazorpayOrderId(order.get("id"));
        payment.setAmount(dto.getAmount());
        payment.setStatus(PaymentStatus.PENDING);
        payment.setCreatedAt(LocalDateTime.now());
        payment.setBooking(booking);

        paymentRepository.save(payment);

        return order.toString(); // Frontend uses this order info
    }

    // Handle Cash on Drop
    public void handleCashOnDrop(Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        Payment payment = new Payment();
        payment.setAmount(booking.getFare());
        payment.setStatus(PaymentStatus.SUCCESS);
        payment.setPaymentMode("CASH");

        payment.setCreatedAt(LocalDateTime.now());
        payment.setBooking(booking);

        paymentRepository.save(payment);
    }

    // Handle Manual UPI
    public void handleManualUpi(Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        Payment payment = new Payment();
        payment.setAmount(booking.getFare());
        payment.setStatus(PaymentStatus.SUCCESS);
        payment.setPaymentMode("UPI");

        payment.setCreatedAt(LocalDateTime.now());
        payment.setBooking(booking);

        paymentRepository.save(payment);
    }

    // Update Razorpay Payment after verification
    public void updatePayment(String orderId, String paymentId, String signature) {
        Payment payment = paymentRepository.findByRazorpayOrderId(orderId)
                .orElseThrow(() -> new RuntimeException("Payment not found"));

        payment.setRazorpayPaymentId(paymentId);
        payment.setRazorpaySignature(signature);
        payment.setStatus(PaymentStatus.SUCCESS);
        paymentRepository.save(payment);
    }
}
