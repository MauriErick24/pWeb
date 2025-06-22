package com.web.shapes.exception;

public class UserUnauthorizedException extends RuntimeException{
    public UserUnauthorizedException(String mensaje) {
        super(mensaje);
    }
}
