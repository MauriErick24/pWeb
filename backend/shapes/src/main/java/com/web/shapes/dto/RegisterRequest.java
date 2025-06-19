package com.web.shapes.dto;

import com.web.shapes.entity.Role;

public record RegisterRequest(
        String nombre,
        String email,
        String password,
        Role role
) {}