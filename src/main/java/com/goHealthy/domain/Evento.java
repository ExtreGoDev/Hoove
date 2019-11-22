package com.goHealthy.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Set;

@Entity
public class  Evento implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nome;	
	private String lugar;
	private LocalDateTime dataHoraInicio;
	private LocalDateTime dataHoraFim;
	private String categoria;
	private Boolean status;

	@ManyToMany
	@JoinTable(
			name = "participaçao_evento",
			joinColumns = @JoinColumn(name = "aspirante_id"),
			inverseJoinColumns = @JoinColumn(name = "evento_id"))
	Set<Aspirante> participantesEvento;
	
	public Evento() {
		
	}
			
	public Evento(String nome, String lugar, String categoria, Boolean status, String dataHoraInicio,String duracao) {
		super();
		this.nome = nome;
		this.lugar = lugar;
		this.categoria = categoria;
		this.status=status;
		this.dataHoraInicio=this.parsingStringToDateTime(dataHoraInicio);
		this.dataHoraFim=expireDateTime(this.dataHoraInicio,duracao);
	}

	private LocalDateTime parsingStringToDateTime(String dataHoraInicio) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
		LocalDateTime formatedDateTime = LocalDateTime.parse(
				dataHoraInicio,formatter
		);
		return formatedDateTime;
	}

	public LocalDateTime expireDateTime(LocalDateTime dataHoraInicio,String hours){
		Long hoursLong = Long.parseLong(hours,10);
		return dataHoraInicio.plusHours(hoursLong);
	}

	public Integer getId() {
		return id;
	}

	public LocalDateTime getDataHoraInicio() {
		return dataHoraInicio;
	}

	public void setDataHoraInicio(LocalDateTime dataHoraInicio) {
		this.dataHoraInicio = dataHoraInicio;
	}

	public LocalDateTime getDataHoraFim() {
		return dataHoraFim;
	}

	public void setDataHoraFim(LocalDateTime dataHoraFim) {
		this.dataHoraFim = dataHoraFim;
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

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public void setStatus(Boolean status) {
		this.status = status;
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
