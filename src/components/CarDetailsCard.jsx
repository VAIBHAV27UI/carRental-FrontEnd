import carImage from "./../assets/car-image.jpg";
import { FaStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { TfiPanel } from "react-icons/tfi";
import { IoMdCheckmark } from "react-icons/io";

const CarDetailsCard = (props) => {
  const {
    carImg = carImage,
    carTitle = "BMW 3 Series",
    fairAmount = 64,
    review = 4,
    seats = 4,
    toolBox = 2,
    tPanel = "Auto",
  } = props;

  const currency = import.meta.env.VITE_CURRENCY;

  return (
    <>
      <div className="overflow-hidden mb-15">
        <div className="mb-5">
          <img src={carImg} alt="" className="w-full rounded-sm" />
        </div>

        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">{carTitle}</h2>
            <div className="flex items-start">
              <div className="text-[#5856D6] flex mr-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2>{review} Review</h2>
            </div>
          </div>

          <div className="text-right">
            <div className="flex items-start">
              <p className="text-[15px] font-semibold">{currency}</p>
              <h2 className="text-4xl font-bold"> {fairAmount}</h2>
            </div>
            <span className="text-[12px]">Per Day</span>
          </div>
        </div>

        <div className="grid md:grid-cols-6 gap-5 mt-2">
          <div className="flex justify-between col-span-1 text-[12px]">
            <div className="text-center">
              <p className="mb-2">
                <FaUser />
              </p>
              <p className="w-full">{seats}</p>
            </div>
            <div className="text-center">
              <p className="mb-2">
                <FaToolbox />
              </p>
              <p className="w-full">{toolBox}</p>
            </div>
            <div className="text-center">
              <p className="mb-2">
                <TfiPanel />
              </p>
              <p className="w-full">{tPanel}</p>
            </div>
          </div>

          <div className="col-span-3">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 list-disc md:pl-5">
              <li className="flex items-center gap-2 text-[15px]">
                <IoMdCheckmark className="text-green-600" />
                Audio input
              </li>
              <li className="flex items-center gap-2 text-[15px]">
                <IoMdCheckmark className="text-green-600" />
                Bluetooth
              </li>
              <li className="flex items-center gap-2 text-[15px]">
                <IoMdCheckmark className="text-green-600" />
                Heated seats
              </li>
              <li className="flex items-center gap-2 text-[15px]">
                <IoMdCheckmark className="text-green-600" />
                All Wheel drive
              </li>
              <li className="flex items-center gap-2 text-[15px]">
                <IoMdCheckmark className="text-green-600" />
                USB input
              </li>
              <li className="flex items-center gap-2 text-[15px]">
                <IoMdCheckmark className="text-green-600" />
                FM Radio
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetailsCard;
