package Barath.com.Let.s.Go.Cab.controller;

import Barath.com.Let.s.Go.Cab.model.Driver;
import Barath.com.Let.s.Go.Cab.security.JwtUtil;
import Barath.com.Let.s.Go.Cab.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/driver")
@CrossOrigin(origins = "http://localhost:5173")
public class DriverController {

    @Autowired
    private DriverService driverService;

    @Autowired
    private JwtUtil jwtUtil;

    // ✅ 1. Register Driver (OPEN)
    @PostMapping("/register")
    public Driver registerDriver(@RequestBody Driver driver) {
        return driverService.registerDriver(driver);
    }

    // ✅ 2. Login Driver (OPEN) - Returns JWT Token
    @PostMapping("/login")
    public Map<String, String> loginDriver(@RequestBody Driver driver) {
        Driver loggedIn = driverService.login(driver.getEmail(), driver.getLicenseNumber());

        if (!"approved".equalsIgnoreCase(loggedIn.getStatus())) {
            throw new RuntimeException("Driver not approved by admin");
        }

        String token = jwtUtil.generateToken(loggedIn.getEmail(), "DRIVER");
        return Map.of("token", token);
    }

    // ✅ 3. Get Own Driver Profile (SECURED: DRIVER)
    @GetMapping("/me")
    public Driver getOwnProfile(Principal principal) {
        return driverService.getDriverByEmail(principal.getName());
    }

    // ✅ 4. Update Location (SECURED: DRIVER)
    @PutMapping("/location")
    public Driver updateLocation(Principal principal,
                                 @RequestParam double lat,
                                 @RequestParam double lng) {
        Driver driver = driverService.getDriverByEmail(principal.getName());
        return driverService.updateLocation(driver.getId(), lat, lng);
    }


    // ✅ 5. Admin: Get Drivers by Status (SECURED: ADMIN)
    @GetMapping("/status")
    public List<Driver> getDriversByStatus(@RequestParam String status) {
        return driverService.getDriversByStatus(status);
    }

    // ✅ 6. Admin: Update Driver Status (SECURED: ADMIN)
    @PutMapping("/{driverId}/status")
    public Driver updateDriverStatus(@PathVariable Long driverId,
                                     @RequestParam String status) {
        return driverService.updateDriverStatus(driverId, status);
    }

    // ✅ 7. Get All Drivers (optional for admin)
    @GetMapping("/all")
    public List<Driver> getAllDrivers() {
        return driverService.getAllDrivers();
    }
}
