package Barath.com.Let.s.Go.Cab.controller;

import Barath.com.Let.s.Go.Cab.model.Booking;
import Barath.com.Let.s.Go.Cab.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    // ------------------ 1. Create Booking ---------------------
    @PostMapping("/create")
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }

    // ------------------ 2. Get All Bookings ---------------------
    @GetMapping("/all")
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    // ------------------ 3. Get Bookings for Driver ---------------------
    @GetMapping("/driver/{driverId}")
    public List<Booking> getBookingsForDriver(@PathVariable Long driverId) {
        return bookingService.getBookingsForDriver(driverId);
    }

    // ------------------ 4. Assign Driver to Booking ---------------------
    @PutMapping("/assign/{bookingId}/driver/{driverId}")
    public Booking assignDriver(
            @PathVariable Long bookingId,
            @PathVariable Long driverId
    ) {
        return bookingService.assignDriver(bookingId, driverId);
    }

    // ------------------ 5. Delete Booking ---------------------
    @DeleteMapping("/delete/{id}")
    public void deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
    }

    // ------------------ 6. Get Nearby Bookings for Driver ---------------------
    @GetMapping("/nearby/{driverId}")
    public List<Booking> getNearbyBookings(@PathVariable Long driverId) {
        return bookingService.getNearbyBookingsForDriver(driverId);
    }

    // ------------------ 7. Get Booking by ID ---------------------
    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }

    // ------------------ 8. Update Booking ---------------------
    @PutMapping("/update/{id}")
    public Booking updateBooking(@PathVariable Long id, @RequestBody Booking booking) {
        return bookingService.updateBooking(id, booking);
    }
}
