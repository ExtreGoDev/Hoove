package com.goHealthy.repositories;

import java.util.Optional;

import com.goHealthy.domain.Aspirante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AspiranteRepository extends JpaRepository<Aspirante,Integer> {

	Optional<Aspirante> findByEmail(String email);
}
