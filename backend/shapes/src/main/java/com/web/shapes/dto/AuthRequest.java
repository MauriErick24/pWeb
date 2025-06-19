package com.web.shapes.dto;

public record AuthRequest(
        String email,
        String password
) {}