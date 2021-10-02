package com.lithan.XYZ.Cars.Project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Users")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/Register")
	public void addUsers(@RequestBody User user) 
	{
		userService.addUser(user);
	}
	@GetMapping("/Register")
	public List<User> getUsers()
	{
		List<User> users = userService.getUsers();
		return users;
	}
	@PostMapping("/Login")
    public User login(@RequestBody User user) 
    {
        User login_user = userService.login(user);

        return login_user;
    }
	
}
