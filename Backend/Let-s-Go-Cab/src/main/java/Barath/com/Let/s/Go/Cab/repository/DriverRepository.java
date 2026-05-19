package Barath.com.Let.s.Go.Cab.repository;

import Barath.com.Let.s.Go.Cab.model.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface DriverRepository extends JpaRepository<Driver, Long> {
    Optional<Driver> findByEmail(String email);
    Optional<Driver> findByLicenseNumber(String licenseNumber);
    Optional<Driver> findByEmailAndLicenseNumber(String email, String licenseNumber);

    // ✅ Needed for filtering drivers by status
    List<Driver> findByStatusIgnoreCase(String status);
}
