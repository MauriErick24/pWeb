package com.web.shapes.service;

import java.util.List;

import com.web.shapes.dto.PreguntaRequest;
import com.web.shapes.entity.Pregunta;

public interface PreguntaService {
    void guardarPregunta(PreguntaRequest request);
    List<Pregunta> obtenerTodas();
}
