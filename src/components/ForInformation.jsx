import { CiMobile4 } from "react-icons/ci";
import { GiAlarmClock } from "react-icons/gi";

const ForInformation = () => {
  return (
    <>
      <div className="border-gray-400 border-1 rounded-md p-4">
        <h2 className="border-b-1 border-gray-300 pb-1 mb-2">
          For More Informations
        </h2>
        <p className="flex items-center text-gray-500 font-light">
          <CiMobile4 className="mr-2" />
          <span className="text-[14px]"> 1-567-124-44227</span>
        </p>
        <p className="flex items-center text-gray-500 font-light">
          <GiAlarmClock className="mr-2" />
          <span className="text-[14px]">Mon - Sat 8.00 - 18.00</span>
        </p>
      </div>
    </>
  );
};

export default ForInformation;
