package Barath.com.Let.s.Go.Cab.repository;

import Barath.com.Let.s.Go.Cab.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Optional<Customer> findByEmail(String email);
}
