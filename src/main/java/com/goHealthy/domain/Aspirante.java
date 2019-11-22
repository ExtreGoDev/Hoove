package com.goHealthy.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;



import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.Email;

@Entity
public class Aspirante implements Serializable {
    private static final long serialVersionUID = 1L;
    private String nome;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Email
    private String email;
    private String numero;
    private String conquista;
    private Double avaliacao;
    private Boolean status;
    private String senha;
    private Integer idade;

    @ManyToMany
    @JsonIgnore
    @JoinTable(name="tabela_amigos",
    joinColumns = @JoinColumn(name="aspiranteId"),
    inverseJoinColumns = @JoinColumn(name="amigoId"))
    private List<Aspirante> amigos = new ArrayList();

    @ManyToMany
    @JsonIgnore
    @JoinTable(name="tabela_amigos",
            joinColumns = @JoinColumn(name="amigoId"),
            inverseJoinColumns = @JoinColumn(name="aspiranteId"))
    private List<Aspirante> amigoDe = new ArrayList();

    @JsonIgnore
    @ManyToMany(mappedBy="participantesEvento")
    Set<Evento> participandoEventos;

    public String getNome() {
        return nome;
    }


    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNumero() {
        return numero;
    }

    public List<Aspirante> getAmigos() {
        return amigos;
    }
    public void addAmigo(Aspirante aspirante){
        this.getAmigos().add(aspirante);
    }
    public void aceitarAmizade(Aspirante aspirante){
        this.getAmigoDe().add(aspirante);
    }

    public void delAmigo(Aspirante aspirante){
        this.getAmigos().remove(aspirante);
        aspirante.getAmigoDe().remove(this);
    }

    public void setAmigos(List<Aspirante> amigos) {
        this.amigos = amigos;
    }

    public List<Aspirante> getAmigoDe() {
        return this.amigoDe;
    }

    public void setAmigoDe(List<Aspirante> amigoDe) {
        this.amigoDe = amigoDe;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getConquista() {
        return conquista;
    }

    public void setConquista(String conquista) {
        this.conquista = conquista;
    }

    public Double getAvaliacao() {
        return avaliacao;
    }

    public Set<Evento> getParticipandoEventos() {
        return participandoEventos;
    }

    public void setParticipandoEventos(Set<Evento> participandoEventos) {
        this.participandoEventos = participandoEventos;
    }

    public void setAvaliacao(Double avaliacao) {
        this.avaliacao = avaliacao;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getSenha() {
        return senha;
    }




    public void setSenha(String senha) {
        this.senha = senha;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Aspirante)) return false;
        Aspirante aspirante = (Aspirante) o;
        return getId().equals(aspirante.getId());
    }



    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }

    public Aspirante(String nome, String email, String numero, String senha,Integer idade) {
        this.nome = nome;
        this.email = email;
        this.numero = numero;
        this.setStatus(true);
        this.senha = senha;
        this.setAvaliacao(4.5);
        this.idade=idade;
    }
    public Aspirante(){

    }
}
