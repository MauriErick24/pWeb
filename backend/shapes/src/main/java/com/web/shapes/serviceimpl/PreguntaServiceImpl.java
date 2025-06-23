package com.web.shapes.serviceimpl;

import com.web.shapes.dto.PreguntaRequest;
import com.web.shapes.entity.Pregunta;
import com.web.shapes.repository.PreguntaRepository;
import com.web.shapes.service.PreguntaService;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PreguntaServiceImpl implements PreguntaService {

    private final PreguntaRepository repository;

    @Override
    public void guardarPregunta(PreguntaRequest request) {
        Pregunta pregunta = Pregunta.builder()
            .title(request.title())
            .description(request.description())
            .consigna(request.consigna())
            .easyStart(request.easyStart())
            .easyEnd(request.easyEnd())
            .mediumStart(request.mediumStart())
            .mediumEnd(request.mediumEnd())
            .hardStart(request.hardStart())
            .hardEnd(request.hardEnd())
            .img(request.img())
            .answer(request.answer())
            .build();

        repository.save(pregunta);
    }

    @Override
    public List<Pregunta> obtenerTodas() {
        return repository.findAll();
    }
}
