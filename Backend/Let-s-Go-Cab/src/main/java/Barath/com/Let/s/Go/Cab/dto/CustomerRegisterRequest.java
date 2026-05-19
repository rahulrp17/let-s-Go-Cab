package Barath.com.Let.s.Go.Cab.dto;

import lombok.Data;

@Data
public class CustomerRegisterRequest {
    private String name;
    private String email;
    private String phone;
    private String password;
}
