package Barath.com.Let.s.Go.Cab.service;

import Barath.com.Let.s.Go.Cab.model.Admin;
import Barath.com.Let.s.Go.Cab.model.Driver;
import Barath.com.Let.s.Go.Cab.repository.AdminRepository;
import Barath.com.Let.s.Go.Cab.repository.DriverRepository;
import Barath.com.Let.s.Go.Cab.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepo;

    @Autowired
    private DriverRepository driverRepo;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // ✅ Register Admin
    public Admin registerAdmin(Admin admin) {
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        return adminRepo.save(admin);
    }

    // ✅ Login Admin and Generate JWT Token
    public Map<String, String> loginAdmin(String email, String password) {
        Admin admin = adminRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        if (!passwordEncoder.matches(password, admin.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtUtil.generateToken(email, "ADMIN");

        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        return response;
    }

    // ✅ Get all drivers
    public List<Driver> getAllDrivers() {
        return driverRepo.findAll();
    }

    // ✅ Get drivers by status (pending, approved, rejected)
    public List<Driver> getDriversByStatus(String status) {
        return driverRepo.findByStatusIgnoreCase(status);
    }

    // ✅ Approve or Reject a driver
    public Driver updateDriverStatus(Long driverId, String status) {
        Driver driver = driverRepo.findById(driverId)
                .orElseThrow(() -> new RuntimeException("Driver not found"));

        driver.setStatus(status.toLowerCase());
        return driverRepo.save(driver);
    }

    // ✅ Get single driver details
    public Driver getDriverById(Long id) {
        return driverRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Driver not found"));
    }
}
