package com.web.shapes.dto;

public class UserResponse {
    private String nombre;
    private String email;

    public UserResponse(String nombre, String email) {
        this.nombre = nombre;
        this.email = email;
    }

    // Getters y setters
    public String getNombre() {
        return nombre;
    }

    public String getEmail() {
        return email;
    }
}
