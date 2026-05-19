package Barath.com.Let.s.Go.Cab.repository;

import Barath.com.Let.s.Go.Cab.model.Tariff;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TariffRepository extends JpaRepository<Tariff, Long> {
    Optional<Tariff> findByVehicleType(String vehicleType);
}