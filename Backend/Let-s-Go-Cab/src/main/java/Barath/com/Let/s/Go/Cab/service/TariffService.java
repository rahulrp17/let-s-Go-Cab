package Barath.com.Let.s.Go.Cab.service;

import Barath.com.Let.s.Go.Cab.model.Tariff;
import Barath.com.Let.s.Go.Cab.repository.TariffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TariffService {

    @Autowired
    private TariffRepository tariffRepository;

    public Tariff addTariff(Tariff tariff) {
        return tariffRepository.save(tariff);
    }

    public List<Tariff> getAllTariffs() {
        return tariffRepository.findAll();
    }

    public Optional<Tariff> getTariffByCarType(String carType) {
        return tariffRepository.findByVehicleType(carType);
    }

    public void deleteTariff(Long id) {
        tariffRepository.deleteById(id);
    }

    public Tariff updateTariff(Long id, Tariff updated) {
        Tariff tariff = tariffRepository.findById(id).orElseThrow();

        tariff.setVehicleType(updated.getVehicleType());
        tariff.setOneWayRatePerKm(updated.getOneWayRatePerKm());
        tariff.setRoundTripRatePerKm(updated.getRoundTripRatePerKm());
        tariff.setDriverBata(updated.getDriverBata());

        return tariffRepository.save(tariff);
    }

}
