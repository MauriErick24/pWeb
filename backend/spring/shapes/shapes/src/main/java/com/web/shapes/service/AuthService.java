package com.web.shapes.service;

import com.web.shapes.dto.AuthRequest;
import com.web.shapes.dto.AuthResponse;
import com.web.shapes.dto.RegisterRequest;

public interface AuthService {
    AuthResponse register(RegisterRequest request);
    AuthResponse authenticate(AuthRequest request);
}