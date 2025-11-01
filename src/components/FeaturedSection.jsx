import { useEffect } from "react";
import CarCard from "./CarCard";
import Title from "./Title";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/carThunk";

const FeaturedSection = () => {
  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (loading) return <p>Loading cars...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!Array.isArray(cars) || cars.length === 0) return <p>No cars available.</p>;

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 max-w-7xl mx-auto">
      <div>
        <Title
          heading="First Class Car Rental & Limousine Services"
          subheading="We offer professional car rental & limousine services in our range of high-end vehicles"
        />
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cars.slice(0, 6).map((car) => (
            <div key={car._id}>
              <Link to={`/cars/make/${car.brand}`}>
                <CarCard image={car.thumbnail} heading={car.brand} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
