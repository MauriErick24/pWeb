package com.web.shapes.controller;

import com.web.shapes.dto.PreguntaRequest;
import com.web.shapes.entity.Pregunta;
import com.web.shapes.service.PreguntaService;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/preguntas")
@RequiredArgsConstructor
public class PreguntaController {

    private final PreguntaService preguntaService;

    @PostMapping
    public ResponseEntity<?> crearPregunta(@RequestBody PreguntaRequest request) {
        System.out.println("Pregunta procesada correctamente");
        preguntaService.guardarPregunta(request);
        return ResponseEntity.ok("Pregunta guardada");
    }

    @GetMapping
    public ResponseEntity<List<Pregunta>> obtenerPreguntas() {
        List<Pregunta> preguntas = preguntaService.obtenerTodas();
        return ResponseEntity.ok(preguntas);
    }
}
