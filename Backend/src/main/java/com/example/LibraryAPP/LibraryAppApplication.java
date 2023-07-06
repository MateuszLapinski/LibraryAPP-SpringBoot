package com.example.LibraryAPP;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class LibraryAppApplication {
	public static final String LOCALHOST="http://localhost:3000";

	public static void main(String[] args) {
		SpringApplication.run(LibraryAppApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/allbooks").allowedOrigins(LOCALHOST);
				registry.addMapping("/addbooks").allowedOrigins(LOCALHOST);
				registry.addMapping("/yourbooks/{user_name}").allowedOrigins(LOCALHOST);
				registry.addMapping("/books/{id}").allowedOrigins(LOCALHOST);
				registry.addMapping("/updatebook/{id}").allowedOrigins(LOCALHOST);
				registry.addMapping("/deleteBooks/{id}").allowedOrigins(LOCALHOST);
				registry.addMapping("/users").allowedOrigins(LOCALHOST);
				registry.addMapping("/user/{id}").allowedOrigins(LOCALHOST);
				registry.addMapping("/signup").allowedOrigins(LOCALHOST);
				registry.addMapping("/signin").allowedOrigins(LOCALHOST);
				registry.addMapping("/deleteUser/{id}").allowedOrigins(LOCALHOST);
				registry.addMapping("/{id}").allowedOrigins(LOCALHOST);
			}
		};
	}
}
