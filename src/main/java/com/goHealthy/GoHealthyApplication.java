package com.goHealthy;

import com.goHealthy.domain.Aspirante;
import com.goHealthy.repositories.AspiranteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@SpringBootApplication
public class GoHealthyApplication implements CommandLineRunner {
	@Autowired
	private AspiranteRepository aspiranteRepository;
	@Autowired
	private BCryptPasswordEncoder encoder;

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	public static void main(String[] args) {
		SpringApplication.run(GoHealthyApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Aspirante aspirante1=new Aspirante("Lucas","lucasvufma@gmail.com", "98986024266", encoder.encode("123"));
		//encode.matches(password,user.getPassword()) this is the way to check if the encoded pass matches
		Aspirante aspirante2=new Aspirante("MeuAmigo","Brother@gmail.com", "66666666",  encoder.encode("123"));
		aspiranteRepository.save(aspirante1);
		aspiranteRepository.save(aspirante2);
	}
}
