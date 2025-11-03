import { useNavigate } from "react-router-dom";
import heroBanner from "./../assets/hero-banner.jpg";
import SearchCar from "./SearchCar";
import { useSelector } from "react-redux";

const Hero = () => {
const { cars, loading, error } = useSelector((state) => state.cars);

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

  const navigate = useNavigate();

  const handleSearch = (filters) => {
    const query = new URLSearchParams(filters).toString();
    navigate(`/cars?${query}`);
  };

  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex flex-col gap-14 items-center justify-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <h1 className="text-white text-4xl md:text-5xl font-semibold">
          Find Best Car & Limousine
        </h1>
        <h6 className="md:text-[18px] font-medium text-gray-100">
          From as low as $10 per day with limited time offer discounts
        </h6>

        {/* <div className="w-full">
          <SearchCar
            onFilter={handleSearch}
            brands={carsOption.map((brand, i) => (
              <option key={i}>{brand}</option>
            ))}
            types={carsType.map((type, i) => (
              <option key={i}>{type}</option>
            ))}
            sort={sortBy.map((sortB, i) => (
              <option key={i}>{sortB}</option>
            ))}
          />
        </div> */}
      </div>
    </>
  );
};

export default Hero;
