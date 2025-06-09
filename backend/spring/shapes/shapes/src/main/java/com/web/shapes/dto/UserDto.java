package com.web.shapes.dto;

import com.web.shapes.entity.Role;

public record UserDto(
        Long id,
        String nombre,
        String email,
        Role role
) {}