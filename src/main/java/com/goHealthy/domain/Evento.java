package com.goHealthy.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
public class  Evento implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nome;	
	private String lugar;
	private String data;
	private String hora;
	private Categoria categoria;
	private Boolean status;

	@ManyToMany
	@JoinTable(
			name = "participaçao_evento",
			joinColumns = @JoinColumn(name = "aspirante_id"),
			inverseJoinColumns = @JoinColumn(name = "evento_id"))
	Set<Aspirante> participantesEvento;
	
	public Evento() {
		
	}
			
	public Evento(Integer id, String nome, String lugar, String hora,String data, Categoria categoria, Boolean status) {
		super();
		this.id = id;
		this.nome = nome;
		this.lugar = lugar;
		this.hora = hora;
		this.categoria = categoria;
		this.status=status;
	}

	public Integer getId() {
		return id;
	}


	public Set<Aspirante> getParticipantesEvento() {
		return participantesEvento;
	}

	public void setParticipantesEvento(Set<Aspirante> participantesEvento) {
		this.participantesEvento = participantesEvento;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public String getNome() {
		return nome;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Evento other = (Evento) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
	
	
	
	
	
	
	

	

}
