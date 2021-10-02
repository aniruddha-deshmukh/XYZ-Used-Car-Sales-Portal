package com.lithan.XYZ.Cars.Project;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Cars")
public class CarController {

	@Autowired
	private CarService carService;
	
	
	@PostMapping("/API")
	public  Car postCars(@RequestBody Car car)
	{
		return carService.addCar(car);
		
	}
	
	@GetMapping("/API")
	public List<Car> getCars()
	{
		List<Car> cars = carService.getCars();
		return cars;
	}	
	
	
	@DeleteMapping(value = "/API/{id}")
	public void deleteUser(@PathVariable Integer id)
	{
		
		carService.deleteCarById(id);
	}
	
	
	@GetMapping(value = "/API/{carId}")
	public Optional<Car> findCarById(@PathVariable Integer carId) {
		System.out.println("Get Car By Id");
		return carService.findCarById(carId);
	}
	
	
	
	@RequestMapping(value = "/API/{carId}", 
			  produces = "application/json", 
			  method=RequestMethod.PUT)
			public Car updateCar(@RequestBody Car car,@PathVariable Integer carId) {
//				System.out.println("Update User");
				Optional<Car> oldCar=carService.findCarById(carId);
				if(oldCar.isPresent())
				{
					Car obj=oldCar.get();
					obj.setCarName(car.getCarName());
					obj.setCarMake(car.getCarMake());
					obj.setCarModel(car.getCarModel());
					obj.setCarRegistration(car.getCarRegistration());
					obj.setCarPricerange(car.getCarPricerange());
					return carService.addCar(obj);
					
				}	
				else 
				{
					//user.setId(id);
					return carService.addCar(car);
				}
			}
	
	
	 @GetMapping("/API/Search/{searchKeyword}") 
	 public List<Car> searchForCars(@PathVariable("searchKeyword") String searchKeyword) {
	
		 List<Car> cars = carService.searchForCars(searchKeyword); 
		 
		 
		 return cars; 
	 
	 }
	 
}
