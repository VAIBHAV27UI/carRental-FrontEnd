import { useEffect, useState } from "react";
import CarDetailsCard from "../components/CarDetailsCard";
import ForInformation from "../components/ForInformation";
import SearchCar from "../components/SearchCar";
import Title from "../components/Title";
import carBlog from "./../assets/booking/blogs";

import carBan from "./../assets/car-banner.jpg";
import { Link, useParams } from "react-router-dom";
import BlogSidebar from "../components/BlogSidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/carThunk";

const Cars = () => {
  const { brand, type } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [carData, setCarData] = useState([]);

  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    setBlogs(carBlog);
  }, []);

  useEffect(() => {
    if (cars && cars.length > 0) {
      let filtered = [...cars];

      if (brand) {
        filtered = filtered.filter(
          (car) => car.brand.toLowerCase() === brand.toLowerCase()
        );
      }

      if (type) {
        filtered = filtered.filter(
          (car) => car.type.toLowerCase() === type.toLowerCase()
        );
      }

      setCarData(filtered);
    }
  }, [cars, brand, type]);

  const carsOption = [
    "BMW",
    "Audi",
    "Mercedes Benz",
    "Lexus",
    "MINI",
    "Porsche",
  ];
  const carsType = ["Coupe", "Sedan", "SUV"];

  const sortBy = [
    "Price Low to High",
    "Price High to Low",
    "Sort by Model",
    "Sort by Popularity",
    "Sort By Review Score",
  ];

  const handleFilter = ({ brand, type, sortBy: sortOption }) => {
    if (!cars) return;

    let filtered = [...cars];

    if (brand) {
      filtered = filtered.filter(
        (car) => car.brand.toLowerCase() === brand.toLowerCase()
      );
    }

    if (type) {
      filtered = filtered.filter(
        (car) => car.type.toLowerCase() === type.toLowerCase()
      );
    }

    // Sorting
    if (sortOption === "Price Low to High") {
      filtered.sort((a, b) => a.price_per_day - b.price_per_day);
    } else if (sortOption === "Price High to Low") {
      filtered.sort((a, b) => b.price_per_day - a.price_per_day);
    } else if (sortOption === "Sort by Model") {
      filtered.sort((a, b) => a.model.localeCompare(b.model));
    } else if (sortOption === "Sort by Popularity") {
      filtered.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    } else if (sortOption === "Sort By Review Score") {
      filtered.sort((a, b) => (b.review_score || 0) - (a.review_score || 0));
    }

    setCarData(filtered);
  };

  return (
    <>
      <div
        className="h-screen md:h-100 bg-cover bg-center flex flex-col gap-14 items-center justify-center text-white"
        style={{ backgroundImage: `url(${carBan})` }}
      >
        <Title
          heading="Car List"
          subheading="This is sample of page tagline and you can set it up using page option"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="w-full bg-white p-5 my-5 shadow-xl rounded-md">
          <SearchCar
            brands={carsOption.map((brand, i) => (
              <option key={i}>{brand}</option>
            ))}
            types={carsType.map((type, i) => (
              <option key={i}>{type}</option>
            ))}
            sort={sortBy.map((sortB, i) => (
              <option key={i}>{sortB}</option>
            ))}
            search="Search"
            onFilter={handleFilter}
          />
        </div>

        <div className="px-4 md:px-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 md:gap-8">
          <div className="col-span-2">
            {carData.map((car, index) => {
              return (
                <Link to={`/cars/${car._id}`} key={index}>
                  <CarDetailsCard
                    key={index}
                    carImg={car.thumbnail}
                    carTitle={car.brand + " " + car.model + " " + car.type}
                    fairAmount={car.pricePerDay}
                    seats={car.seats}
                    tPanel={car.transmission}
                  />
                </Link>
              );
            })}
          </div>

          <div className="h-max sticky">
            <ForInformation />

            <div className="border-gray-400 border-1 rounded-md p-4 my-5">
              <h2 className="border-b-1 border-gray-300 pb-1 mb-2">
                Rental Tips
              </h2>

              {blogs.map((data, i) => (
                <BlogSidebar
                  key={i}
                  avtar={data.avtar}
                  blogTitle={data.title}
                  blogDate={data.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;
