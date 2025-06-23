package com.web.shapes.dto;

public record PreguntaRequest(
    String title,
    String description,
    String consigna,
    int easyStart,
    int easyEnd,
    int mediumStart,
    int mediumEnd,
    int hardStart,
    int hardEnd,
    String img,
    String answer
) {}
