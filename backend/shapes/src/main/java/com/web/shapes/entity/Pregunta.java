package com.web.shapes.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "preguntas")
public class Pregunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(columnDefinition = "TEXT")
    private String consigna;

    private int easyStart;
    private int easyEnd;
    private int mediumStart;
    private int mediumEnd;
    private int hardStart;
    private int hardEnd;

    @Column(columnDefinition = "TEXT")
    private String img;

    @Column(columnDefinition = "TEXT")
    private String answer;
}
