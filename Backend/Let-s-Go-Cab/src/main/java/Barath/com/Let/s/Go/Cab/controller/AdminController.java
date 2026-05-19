package Barath.com.Let.s.Go.Cab.controller;

import Barath.com.Let.s.Go.Cab.dto.AdminLoginRequest;
import Barath.com.Let.s.Go.Cab.model.Admin;
import Barath.com.Let.s.Go.Cab.model.Booking;
import Barath.com.Let.s.Go.Cab.model.Driver;
import Barath.com.Let.s.Go.Cab.security.JwtUtil;
import Barath.com.Let.s.Go.Cab.service.AdminService;
import Barath.com.Let.s.Go.Cab.service.BookingService;
import Barath.com.Let.s.Go.Cab.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private DriverService driverService;

    @Autowired
    private BookingService bookingService;

    @Autowired
    private JwtUtil jwtUtil;

    // ------------------ 1. Register Admin ---------------------
    @PostMapping("/register")
    public Admin registerAdmin(@RequestBody Admin admin) {
        return adminService.registerAdmin(admin);
    }

    // ------------------ 2. Login Admin ---------------------

    @PostMapping("/login")
    public Map<String, String> loginAdmin(@RequestBody AdminLoginRequest request) {
        return adminService.loginAdmin(request.getEmail(), request.getPassword());
    }


    // ------------------ 3. Get All Drivers ---------------------
    @GetMapping("/drivers")
    public List<Driver> getAllDrivers() {
        return driverService.getAllDrivers();
    }



    // ------------------ 4. Get All Bookings ---------------------
    @GetMapping("/bookings")
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    // ------------------ 5. Delete Booking ---------------------
    @DeleteMapping("/booking/{id}")
    public String deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return "Booking deleted successfully";
    }

    // ✅ 6. Get Drivers by Status (e.g., approved/pending)
    @GetMapping("/drivers/status")
    public List<Driver> getDriversByStatus(@RequestParam String status) {
        return driverService.getDriversByStatus(status);
    }
    // ------------------ 7. Get Booking by ID ---------------------
    @GetMapping("/booking/{id}")
    public Booking getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }

    // ✅ 7. Approve/Reject Driver
    @PutMapping("/driver/{id}/status")
    public Driver updateDriverStatus(@PathVariable Long id, @RequestParam String status) {
        return driverService.updateDriverStatus(id, status);
    }
}
