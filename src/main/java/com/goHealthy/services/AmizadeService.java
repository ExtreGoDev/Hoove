package com.goHealthy.services;

import com.goHealthy.domain.Aspirante;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AmizadeService {
    @Autowired
    private AspiranteService aspiranteService;

    public Optional<List<Aspirante>> getAll(Integer id) {
        Optional<List<Aspirante>> aspirante = Optional.ofNullable(aspiranteService.find(id).get().getAmigos());
        return aspirante;
    }

    public Optional<Aspirante> findById(Integer id){
        Optional<Aspirante> aspirante = aspiranteService.find(id);
        return aspirante;
    }

    public Aspirante postAspirante(Aspirante aspirante) {
        return aspiranteService.post(aspirante);
    }



}
