package com.goHealthy.services;

import com.goHealthy.domain.Aspirante;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AmizadeService {
    @Autowired
    private AspiranteService aspiranteService;

    public Optional<List<Aspirante>> getAmigos(Integer id) {
        Optional<Aspirante> aspirante= aspiranteService.find(id);
        if(aspirante.isPresent()){
            Optional<List<Aspirante>> listaAmigosDe= Optional.ofNullable(aspirante.get().getAmigoDe());
            List<Aspirante> amigos = new ArrayList();
            List<Aspirante> listaAmigos = aspirante.get().getAmigos();
            for(Aspirante possivelAmigo : listaAmigosDe.get()){
                if (listaAmigos.contains(possivelAmigo)){
                    amigos.add(possivelAmigo);
                }
            }
            return Optional.ofNullable(amigos);
        }
        else{
            //cant find aspirante.
            throw new RuntimeException();
        }
    }

    public List<Aspirante> getPedidosAmizade(Integer id) {
        Optional<Aspirante> aspirante = aspiranteService.find(id);
        if (aspirante.isPresent()) {
            Optional<List<Aspirante>> listaAmigosDe = Optional.ofNullable(aspirante.get().getAmigoDe());
            List<Aspirante> pedidosAmizade = new ArrayList();
            if (listaAmigosDe.isPresent()) {
                for (Aspirante possivelAmigo : listaAmigosDe.get()) {
                    if (!aspirante.get().getAmigos().contains(possivelAmigo)) {
                        //logo isto é um pedido de amizade, possivel amigo não e uma amigo ainda.
                        pedidosAmizade.add(possivelAmigo);
                    }
                }
            }
            //this way can be empty, need remmember this in front.
            return pedidosAmizade;
        }
        else{
            throw new RuntimeException();
        }
    }


    public Optional<Aspirante> findById(Integer id){
        Optional<Aspirante> aspirante = aspiranteService.find(id);
        return aspirante;
    }

    public Aspirante postAspirante(Aspirante aspirante) {
        return aspiranteService.post(aspirante);
    }

    public Boolean checarPedido(Aspirante aspirante,Aspirante amigo){
        if(aspirante.getAmigos().contains(amigo) && (!amigo.getAmigos().contains(aspirante))){
            return true;
        }
        else{
            return false;
        }
    }

    public Boolean checarAmizade(Aspirante aspirante, Aspirante amigo){
        if(aspirante.getAmigos().contains(amigo) && amigo.getAmigos().contains(aspirante)){
            return true;
        }
        else{
            return false;
        }

    }



}
