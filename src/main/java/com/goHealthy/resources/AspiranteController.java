package com.goHealthy.resources;

import com.goHealthy.domain.Aspirante;
import com.goHealthy.domain.Evento;
import com.goHealthy.services.AspiranteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.net.URI;
import com.goHealthy.services.S3Service;
import org.springframework.beans.factory.annotation.Value;

import java.util.Optional;

@RestController
@RequestMapping("/aspirantes")
public class AspiranteController {

    @Value("${s3.aspirantes.directory}")
	private String directory;

    @Autowired
    private S3Service s3service;

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
        } else{
        return ResponseEntity.ok(aspirante.get());
        }
    }

    @PostMapping("/{id}/foto")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Void> uploadFotoEvento(@PathVariable Integer id, @RequestParam(name="file") MultipartFile file){
        Optional<Aspirante> aspirante = aspiranteService.find(id);
        if (!(aspirante.isPresent())) {
            return ResponseEntity.notFound().build();
        }
        else{
            URI uri = s3service.uploadPicture(file,directory,"asp",aspirante.get().getId());
            aspirante.get().seturlFoto(uri.toString());
            aspiranteService.postwithoutEncode(aspirante.get());
        return ResponseEntity.created(uri).build();
        }
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
