package com.web.shapes.dto;

import com.web.shapes.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public UserDto toDto(User user) {
        return new UserDto(
                user.getId(),
                user.getNombre(),
                user.getEmail(),
                user.getRole()
        );
    }
}