package com.goHealthy.domain;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.validation.constraints.Email;

public class Credential implements Serializable{
    private static final long serialVersionUID = 1L;
    private String email;
    private String senha;
    private Integer id;

    public Credential(){

    }
   public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }
    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id=id;
    }

}