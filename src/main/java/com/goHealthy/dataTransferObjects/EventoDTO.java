package com.goHealthy.dataTransferObjects;

import com.goHealthy.domain.Aspirante;
import com.goHealthy.domain.Categoria;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;
import java.util.Set;

public class EventoDTO {
    private static final long serialVersionUID = 1L;
    private Integer id;
    private String nome;
    private String lugar;
    private String data;
    private String hora;
    private String categoria;
    private Boolean status;
    Set<AspiranteDTO> participantesEvento;
    public EventoDTO(){

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof EventoDTO)) return false;
        EventoDTO eventoDTO = (EventoDTO) o;
        return Objects.equals(getId(), eventoDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLugar() {
        return lugar;
    }

    public void setLugar(String lugar) {
        this.lugar = lugar;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getHora() {
        return hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Set<AspiranteDTO> getParticipantesEvento() {
        return participantesEvento;
    }

    public void setParticipantesEvento(Set<AspiranteDTO> participantesEvento) {
        this.participantesEvento = participantesEvento;
    }
}
