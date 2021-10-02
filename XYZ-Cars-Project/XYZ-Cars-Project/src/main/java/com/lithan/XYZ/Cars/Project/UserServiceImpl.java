package com.lithan.XYZ.Cars.Project;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	UserRepository userRepo;
	
	@Override
	public void addUser(User user) {
		
		userRepo.save(user);
	}

	@Override
	public List<User> getUsers() {
		List <User> users = userRepo.findAll();
		return users;
	}
	
	@Override 
    public User login(User user) { 


        User repouser = userRepo.findByuserName(user.getUserName()); 
        if (repouser == null) { 
            //throw new RuntimeException("User does not exist"); 
            return null; }

      if(!repouser.getUserPassword().equals(user.getUserPassword())) { 
          //throw new RuntimeException("Password is incorrect"); 
          return null; } 

      return repouser;

    }

}
