package com.goHealthy.resources;

import com.goHealthy.domain.Aspirante;
import com.goHealthy.domain.Evento;
import com.goHealthy.services.AspiranteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/aspirantes")
public class AspiranteController {

    @Autowired
    AspiranteService aspiranteService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Aspirante post(@RequestBody Aspirante aspirante){
        aspirante.setAvaliacao(4.5);
        aspirante.setStatus(true);
        return aspiranteService.post(aspirante);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Aspirante> get(@PathVariable Integer id){
        Optional<Aspirante> aspirante = aspiranteService.find(id);
        if (!(aspirante.isPresent())) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(aspirante.get());
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id){
        Optional<Aspirante> aspirante = aspiranteService.find(id);
        if(aspirante.isPresent()){
            aspiranteService.deleteById(id);
        }
    }
}
