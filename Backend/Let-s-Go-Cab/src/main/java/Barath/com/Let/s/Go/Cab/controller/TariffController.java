package Barath.com.Let.s.Go.Cab.controller;

import Barath.com.Let.s.Go.Cab.model.Tariff;
import Barath.com.Let.s.Go.Cab.service.TariffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tariffs")
@CrossOrigin(origins = "http://localhost:5173")
public class TariffController {

    @Autowired
    private TariffService tariffService;

    @PostMapping
    public Tariff addTariff(@RequestBody Tariff tariff) {
        return tariffService.addTariff(tariff);
    }

    @GetMapping
    public List<Tariff> getAllTariffs() {
        return tariffService.getAllTariffs();
    }

    @PutMapping("/{id}")
    public Tariff updateTariff(@PathVariable Long id, @RequestBody Tariff updatedTariff) {
        return tariffService.updateTariff(id, updatedTariff);
    }

    @DeleteMapping("/{id}")
    public void deleteTariff(@PathVariable Long id) {
        tariffService.deleteTariff(id);
    }
    @GetMapping("/{vehicleType}")
    public ResponseEntity<Tariff> getByVehicleType(@PathVariable String vehicleType) {
        return tariffService.getTariffByCarType(vehicleType)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
