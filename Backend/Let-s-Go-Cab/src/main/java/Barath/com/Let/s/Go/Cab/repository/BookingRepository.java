package Barath.com.Let.s.Go.Cab.repository;

import Barath.com.Let.s.Go.Cab.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    // Get all bookings assigned to a specific driver
    List<Booking> findByDriverId(Long driverId);

    // Get all bookings with a specific status (e.g., "pending")
    List<Booking> findByStatus(String status);



}
