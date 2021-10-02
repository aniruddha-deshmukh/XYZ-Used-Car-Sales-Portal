import axios from 'axios';
const CAR_BASE_URL = "http://localhost:8080/Cars/API";


class CarService {

    addCar(car){
        console.log("Create Car" + JSON.stringify(car));
        return axios.post(CAR_BASE_URL, car);
            }

            searchCar(searchKeyword){
				console.log("Search keyword is  "+searchKeyword);
				return axios.get("http://localhost:8080/Cars//API/Search" + '/' + searchKeyword);
			}

            viewCar(carId){
                console.log("View Car from service "+carId);
                return axios.get("http://localhost:8080/Cars/API" + '/' + carId);
            }

        }

export default new CarService()