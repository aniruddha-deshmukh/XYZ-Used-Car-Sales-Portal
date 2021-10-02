package com.lithan.XYZ.Cars.Project;

import java.security.Principal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
//import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@ComponentScan("com.lithan.XYZ.Cars.Project")
@EntityScan("com.lithan.XYZ.Cars.Project")
@EnableJpaRepositories("com.lithan.XYZ.Cars.Project")
//@RestController
//@EnableOAuth2Sso
public class XyzCarsProjectApplication /* extends WebSecurityConfigurerAdapter */ {

//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http
//		.csrf().disable()
//		.antMatcher("/**")
//		.authorizeRequests()
//		.antMatchers("/", "/login**")
//		.permitAll()
//		.anyRequest()
//		.authenticated()
//		.and().logout().logoutSuccessUrl("/").permitAll();
//	}
	
	public static void main(String[] args) {
		SpringApplication.run(XyzCarsProjectApplication.class, args);
	}
	
//	@RequestMapping("/user")
//	public Principal user(Principal principal) {
//	return principal;
//	}

}
