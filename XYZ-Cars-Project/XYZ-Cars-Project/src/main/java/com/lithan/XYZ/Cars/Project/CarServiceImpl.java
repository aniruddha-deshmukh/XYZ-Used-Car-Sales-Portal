package com.lithan.XYZ.Cars.Project;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CarServiceImpl implements CarService{

	@Autowired
	CarRepository carRepo;
	
	@Override
	public Car addCar(Car car) {
		return carRepo.save(car);
	}
	
	@Override
	public List<Car> getCars() {
		List <Car> cars = carRepo.findAll();
		return cars;
	}
	
	@Override
	public void deleteCarById(int id) {
		carRepo.deleteById(id);
	}


	@Override
	public Optional<Car> findCarById(int carId) {
		return carRepo.findById(carId);
	}

	
	 @Override 
	 public List<Car> searchForCars(String searchKeyword) { 
		 
	 List<Car> cars = carRepo.searchForCars(searchKeyword); return cars; 
	 
	 }
	 
}
