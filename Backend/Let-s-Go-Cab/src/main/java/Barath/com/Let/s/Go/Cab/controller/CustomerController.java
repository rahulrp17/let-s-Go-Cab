package Barath.com.Let.s.Go.Cab.controller;

import Barath.com.Let.s.Go.Cab.dto.AdminLoginRequest;
import Barath.com.Let.s.Go.Cab.model.Customer;
import Barath.com.Let.s.Go.Cab.service.CustomerService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/customer/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    // POST: Register a new customer
    @PostMapping("/register")
    public ResponseEntity<Customer> registerCustomer(@RequestBody Customer customer) {
        Customer registeredCustomer = customerService.registerCustomer(customer);
        return ResponseEntity.ok(registeredCustomer);
    }

    // POST: Login and return JWT token
    @PostMapping("/login")
    public Map<String, String> loginCustomer(@RequestBody AdminLoginRequest request) {
        return customerService.loginCustomer(request.getEmail(), request.getPassword());
    }

    // Get currently authenticated customer (optional helper)
    @GetMapping("/CustomerData")
    public ResponseEntity<Customer> getLoggedInCustomer(Authentication authentication) {
        String email = authentication.getName();
        Customer customer = customerService.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        return ResponseEntity.ok(customer);
    }

    // DTO class for login request
    @Data
    public static class LoginRequest {
        private String email;
        private String password;
    }
}
