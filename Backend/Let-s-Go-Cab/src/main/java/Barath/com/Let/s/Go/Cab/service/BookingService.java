package Barath.com.Let.s.Go.Cab.service;

import Barath.com.Let.s.Go.Cab.model.Booking;
import Barath.com.Let.s.Go.Cab.model.Driver;
import Barath.com.Let.s.Go.Cab.model.Tariff;
import Barath.com.Let.s.Go.Cab.repository.BookingRepository;
import Barath.com.Let.s.Go.Cab.repository.DriverRepository;
import Barath.com.Let.s.Go.Cab.repository.TariffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepo;

    @Autowired
    private DriverRepository driverRepo;

    @Autowired
    private TariffRepository tariffRepo;

    // Create Booking with validations and fare calculation
    public Booking createBooking(Booking booking) {
        booking.setStatus("pending");
        booking.setCreatedAt(LocalDateTime.now());

        // Distance calculation
        double distance = calculateDistance(
                booking.getPickupLat(), booking.getPickupLng(),
                booking.getDropLat(), booking.getDropLng()
        );

        // Round-trip validation
        if ("round-trip".equalsIgnoreCase(booking.getTripType())) {
            if (booking.getReturnDate() == null || !booking.getReturnDate().isAfter(booking.getPickupDate())) {
                throw new RuntimeException("Return date must be at least one day after pickup date for round-trip.");
            }
        }

        // Fare calculation based on Tariff
        Tariff tariff = tariffRepo.findByVehicleType(booking.getSelectedCarType())
                .orElseThrow(() -> new RuntimeException("Tariff not found for selected car type."));

        double ratePerKm = "round-trip".equalsIgnoreCase(booking.getTripType())
                ? tariff.getRoundTripRatePerKm()
                : tariff.getOneWayRatePerKm();

        double fare = (ratePerKm * distance) + tariff.getDriverBata()
                + booking.getWaitingCharges() + booking.getTollAmount() + booking.getLuggageCharges();

        booking.setFare(fare);
        return bookingRepo.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepo.findAll();
    }

    public Booking getBookingById(Long id) {
        return bookingRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found with id: " + id));
    }

    public List<Booking> getBookingsForDriver(Long driverId) {
        return bookingRepo.findByDriverId(driverId);
    }

    public Booking assignDriver(Long bookingId, Long driverId) {
        Booking booking = bookingRepo.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        Driver driver = driverRepo.findById(driverId)
                .orElseThrow(() -> new RuntimeException("Driver not found"));

        booking.setDriver(driver);
        booking.setStatus("assigned");
        return bookingRepo.save(booking);
    }

    public void deleteBooking(Long id) {
        bookingRepo.deleteById(id);
    }

    public Booking updateBooking(Long id, Booking updatedBooking) {
        Booking existing = bookingRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found with id: " + id));

        existing.setCustomerName(updatedBooking.getCustomerName());
        existing.setCustomerPhone(updatedBooking.getCustomerPhone());
        existing.setPickupLocation(updatedBooking.getPickupLocation());
        existing.setDropLocation(updatedBooking.getDropLocation());
        existing.setPickupLat(updatedBooking.getPickupLat());
        existing.setPickupLng(updatedBooking.getPickupLng());
        existing.setDropLat(updatedBooking.getDropLat());
        existing.setDropLng(updatedBooking.getDropLng());
        existing.setPickupDate(updatedBooking.getPickupDate());
        existing.setPickupTime(updatedBooking.getPickupTime());
        existing.setReturnDate(updatedBooking.getReturnDate());
        existing.setSelectedCarType(updatedBooking.getSelectedCarType());
        existing.setTripType(updatedBooking.getTripType());
        existing.setWaitingCharges(updatedBooking.getWaitingCharges());
        existing.setTollAmount(updatedBooking.getTollAmount());
        existing.setLuggageCharges(updatedBooking.getLuggageCharges());

        return bookingRepo.save(existing);
    }

    public List<Booking> getNearbyBookingsForDriver(Long driverId) {
        Driver driver = driverRepo.findById(driverId)
                .orElseThrow(() -> new RuntimeException("Driver not found"));

        List<Booking> pendingBookings = bookingRepo.findByStatus("pending");

        double driverLat = driver.getLat();
        double driverLng = driver.getLng();
        double maxDistanceKm = 5.0;

        return pendingBookings.stream()
                .filter(b -> calculateDistance(driverLat, driverLng, b.getPickupLat(), b.getPickupLng()) <= maxDistanceKm)
                .sorted(Comparator.comparingDouble(
                        b -> calculateDistance(driverLat, driverLng, b.getPickupLat(), b.getPickupLng())))
                .toList();
    }

    // Haversine formula for distance calculation
    private double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
        double earthRadius = 6371.0;
        double dLat = Math.toRadians(lat2 - lat1);
        double dLng = Math.toRadians(lon2 - lon1);
        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2)) *
                        Math.sin(dLng / 2) * Math.sin(dLng / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadius * c;
    }
}
