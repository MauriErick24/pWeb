package com.web.shapes.serviceimpl;

import com.web.shapes.config.JwtService;
import com.web.shapes.dto.AuthRequest;
import com.web.shapes.dto.AuthResponse;
import com.web.shapes.dto.RegisterRequest;
import com.web.shapes.entity.User;
import com.web.shapes.repository.UserRepository;
import com.web.shapes.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new RuntimeException("Usuario ya registrado");
        }

        User user = User.builder()
                .nombre(request.nombre())
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .role(request.role())
                .build();

        userRepository.save(user);
        String token = jwtService.generateToken(user);
        return new AuthResponse(token);
    }

    @Override
    public AuthResponse authenticate(AuthRequest request) {
        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (!passwordEncoder.matches(request.password(), user.getPassword())) {
            throw new RuntimeException("Credenciales inválidas");
        }

        String token = jwtService.generateToken(user);
        return new AuthResponse(token);
    }
}