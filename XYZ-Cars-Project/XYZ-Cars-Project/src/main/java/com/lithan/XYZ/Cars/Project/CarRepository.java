package com.lithan.XYZ.Cars.Project;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends JpaRepository<Car, Integer>{
	  
	  
	@Query(value = 

            "SELECT c FROM Car c WHERE c.carName LIKE '%' || :searchKeyword || '%'" 
            + " OR c.carMake LIKE '%' || :searchKeyword || '%'"
          + " OR c.carModel LIKE '%' || :searchKeyword || '%'"
          + " OR c.carRegistration LIKE '%' || :searchKeyword || '%'"
          + " OR c.carPricerange LIKE '%' || :searchKeyword || '%'"
        )
	  
	  public List<Car> searchForCars(@Param("searchKeyword") String searchKeyword);
	 
}
