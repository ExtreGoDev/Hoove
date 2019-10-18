package com.goHealthy.services;

import com.goHealthy.dataTransferObjects.AspiranteDTO;
import com.goHealthy.domain.Aspirante;
import com.goHealthy.repositories.AspiranteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AspiranteService {

    @Autowired
    AspiranteRepository aspiranteRepository;

    public Optional<Aspirante> find(Integer id){
        return aspiranteRepository.findById(id);
    }


    //DTO approach, need delete this if i decide not use it
    public AspiranteDTO toDTO(Aspirante aspirante) {
        AspiranteDTO aspiranteDTO = new AspiranteDTO();
        aspiranteDTO.setId(aspirante.getId());
        aspiranteDTO.setNome(aspirante.getEmail());
        aspiranteDTO.setAvaliacao(aspirante.getAvaliacao());
        aspiranteDTO.setConquista(aspirante.getConquista());
        aspiranteDTO.setNome(aspirante.getNome());
        aspiranteDTO.setNumero(aspirante.getNumero());
        return aspiranteDTO;
    }

    public void deleteById(Integer id) {
        aspiranteRepository.deleteById(id);
    }
}
