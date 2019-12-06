package com.goHealthy.services;

import com.goHealthy.dataTransferObjects.AspiranteDTO;
import com.goHealthy.domain.Aspirante;
import com.goHealthy.domain.Credential;
import com.goHealthy.repositories.AspiranteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AspiranteService {

    @Autowired
    AspiranteRepository aspiranteRepository;

    @Autowired
    private BCryptPasswordEncoder encoder;

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

    public Aspirante post(Aspirante aspirante) {
        aspirante.setSenha(encoder.encode(aspirante.getSenha()));
        return aspiranteRepository.save(aspirante);
    }

    public Boolean checkLogin(Aspirante aspirante,Credential credential){
        if(aspirante.getEmail().equals(credential.getEmail())
        && encoder.matches(credential.getSenha(), aspirante.getSenha())){
            return true;
        }
        else{
            return false;
        }
    }
    public Optional<Aspirante> findByEmail(String email){
        Optional<Aspirante> aspirante = aspiranteRepository.findByEmail(email);
        return aspirante;
    }

    public Aspirante postwithoutEncode(Aspirante aspirante){
        return aspiranteRepository.save(aspirante);
    }
}
