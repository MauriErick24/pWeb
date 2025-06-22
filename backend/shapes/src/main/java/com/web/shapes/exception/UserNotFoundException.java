package com.web.shapes.exception;


public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String mensaje) {
        super(mensaje);
    }
}