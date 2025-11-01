import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCarDetails from "./SingleCarDetails";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarById } from "../redux/carThunk";

const SingleCar = () => {
  
  const currency = import.meta.env.VITE_CURRENCY;

  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCar } = useSelector((state) => state.cars);
  
  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);


  if (!selectedCar) {
    return <p className="text-center">Car not found</p>;
  }

  return (
    <>
      <div
        className="h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${selectedCar.thumbnail})` }}
      >
        <div className="flex flex-col items-center justify-center px-4 py-10 max-w-7xl mx-auto relative h-full">
          {/* <div className="absolute bottom-0 left-0 flex">
            <div
              onClick={() => setShowLightBox(true)}
              className="flex items-center bg-black/20 text-white py-2 px-4 rounded-md mb-5 cursor-pointer mr-2"
            >
              <span className="pr-2">
                <BsCameraFill />
              </span>
              View Photos
            </div>

            {showLightBox && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <ImageLightBox
                  showLightBox={showLightBox}
                  setShowLightBox={setShowLightBox}
                />
              </div>
            )}

            <div className="flex items-center bg-black/20 text-white py-2 px-4 rounded-md mb-5 cursor-pointer">
              <span className="pr-2">
                <FaPlay />
              </span>
              View Video
            </div>
          </div> */}

          <div className="text-white absolute bottom-0 right-0 bg-black py-5 px-10">
            <p className="text-2xl font-semibold">
              <sup className="align-super text-xl text-white">
                {import.meta.env.VITE_CURRENCY}
              </sup>
              <span className="ml-1 mr-3 text-5xl">
                {selectedCar.pricePerDay}
              </span>
              <span className="text-sm">Per Day</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <SingleCarDetails
          title={selectedCar.brand + " " + selectedCar.model}
          review={selectedCar.review}
          seating={selectedCar.seatingCapacity}
          transmission={selectedCar.transmission}
          fuelType={selectedCar.fuelType}
          refuelingNote={selectedCar.refueling}
          WashNote={selectedCar.car_wash}
          smokingNote={selectedCar.no_smoking}
          includeList={selectedCar.include?.map((list, i) => (
            <li
              key={i}
              className="flex items-center self-start text-[14px] mb-1.5"
            >
              <span className="mr-2">
                <IoMdCheckmark />
              </span>
              {list}
            </li>
          ))}
          notincludeList={selectedCar.notInclude?.map((list, i) => (
            <li
              key={i}
              className="flex items-center self-start text-[14px] mb-1.5"
            >
              <span className="mr-2">
                <IoMdClose />
              </span>
              {list}
            </li>
          ))}
        />
      </div>
    </>
  );
};

export default SingleCar;
