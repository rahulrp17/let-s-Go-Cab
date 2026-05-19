package Barath.com.Let.s.Go.Cab.repository;

import Barath.com.Let.s.Go.Cab.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Optional<Admin> findByEmail(String email);
}
