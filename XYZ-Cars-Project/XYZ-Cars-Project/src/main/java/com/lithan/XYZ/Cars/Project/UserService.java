package com.lithan.XYZ.Cars.Project;

import java.util.List;

public interface UserService {

	public void addUser(User user);
	
	public List<User> getUsers();
	
	public User login(User user);

}
