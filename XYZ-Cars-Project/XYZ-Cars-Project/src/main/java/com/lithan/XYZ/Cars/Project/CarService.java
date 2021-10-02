package com.lithan.XYZ.Cars.Project;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;



public interface CarService {

	public Car addCar(Car car);
	
	public List<Car> getCars();
	
	public Optional<Car> findCarById(int carId);
	
	public void  deleteCarById(int id);
	
	public List<Car> searchForCars(String searchKeyword);
	
	
}

