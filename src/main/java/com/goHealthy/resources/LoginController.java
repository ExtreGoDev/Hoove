package com.goHealthy.resources;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.goHealthy.domain.Aspirante;

import java.util.Optional;

import com.goHealthy.domain.Credential;
import com.goHealthy.services.AspiranteService;

@RestController
@RequestMapping(value = "/login")
public class LoginController {


    @Autowired
    AspiranteService aspiranteService;



    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Aspirante> uploadFotoEvento(@RequestBody Credential credential){
        Optional<Aspirante> aspirante = aspiranteService.findByEmail(credential.getEmail());
        if (!((aspirante.isPresent() && aspiranteService.checkLogin(aspirante.get(), credential)))){
            return ResponseEntity.notFound().build();
        }
        else{
        return ResponseEntity.ok(aspirante.get());
        }
    }
}