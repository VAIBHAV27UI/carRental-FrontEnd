import { useEffect, useState } from "react";
import Title from "./Title";
import carDummy from "../assets/booking/carDummy";
import CarCard from "./CarCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/carThunk";

const FindCar = () => {
  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const typeCar = cars.filter((car, i, self) => i === self.findIndex((c) => c.type === car.type))

  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 max-w-7xl mx-auto">
        <div className="w-full">
          <Title
            heading="Find Car by Type"
            subheading="We offer professional car rental & limousine services in our range of high-end vehicles"
          />
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {typeCar.map((type) => (
              <Link key={type._id} to={`/cars/type/${type.type}`}>
                <CarCard data-aos="fade-up" image={type.thumbnail} heading={type.type} key={type.id} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>

  );
};

export default FindCar;
