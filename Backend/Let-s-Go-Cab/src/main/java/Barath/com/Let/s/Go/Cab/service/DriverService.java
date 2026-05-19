package Barath.com.Let.s.Go.Cab.service;

import Barath.com.Let.s.Go.Cab.model.Driver;
import Barath.com.Let.s.Go.Cab.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DriverService {

    @Autowired
    private DriverRepository driverRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // ✅ 1. Register Driver
    public Driver registerDriver(Driver driver) {
        if (driverRepo.findByEmail(driver.getEmail()).isPresent()) {
            throw new RuntimeException("Email already registered");
        }

        if (driverRepo.findByLicenseNumber(driver.getLicenseNumber()).isPresent()) {
            throw new RuntimeException("License already registered");
        }

        driver.setPassword(passwordEncoder.encode(driver.getPassword()));
        driver.setStatus("pending");
        return driverRepo.save(driver);
    }

    // ✅ 2. Login with Email and License Number
    public Driver login(String email, String licenseNumber) {
        return driverRepo.findByEmailAndLicenseNumber(email, licenseNumber)
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
    }

    // ✅ 3. Get Driver by ID
    public Driver getDriverById(Long id) {
        return driverRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Driver not found"));
    }

    // ✅ 4. Update Driver Location by ID
    public Driver updateLocation(Long driverId, double lat, double lng) {
        Driver driver = getDriverById(driverId);
        driver.setLat(lat);
        driver.setLng(lng);
        return driverRepo.save(driver);
    }

    // ✅ 5. Get All Drivers
    public List<Driver> getAllDrivers() {
        return driverRepo.findAll();
    }

    // ✅ 6. Get Drivers by Status (e.g., "approved", "pending")
    public List<Driver> getDriversByStatus(String status) {
        return driverRepo.findByStatusIgnoreCase(status);
    }

    // ✅ 7. Update Driver Status (used by admin)
    public Driver updateDriverStatus(Long driverId, String status) {
        Driver driver = getDriverById(driverId);
        driver.setStatus(status.toLowerCase());
        return driverRepo.save(driver);
    }

    // ✅ 8. Get Driver by Email (for JWT principal)
    public Driver getDriverByEmail(String email) {
        return driverRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Driver not found"));
    }

    // ✅ 9. Update Driver Location by Email (used with JWT principal)

}
