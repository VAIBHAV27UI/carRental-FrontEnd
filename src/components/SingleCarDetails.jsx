import BookingCar from "./BookingCar";
import { FaRegUser } from "react-icons/fa";
import { TfiPanel } from "react-icons/tfi";
import { BsFuelPump } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCars } from "../redux/carThunk";

const SingleCarDetails = (props) => {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.cars);
  const { id } = useParams();

  useEffect(() => {
    if (!cars.length) {
      dispatch(fetchCars());
    }
  }, [dispatch, cars.length]);

  const singleCar = cars.find((car) => car._id === id);

  const pricePerDay = singleCar?.pricePerDay;

  const {
    title,
    review = 4,
    refuelingNote = "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse.",
    WashNote = "Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up artisan sunt. Craft beer elit seitan exercitation, photo booth",
    smokingNote = "See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.",
    includeList,
    notincludeList,
    seating,
    transmission,
    fuelType,
  } = props;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-4 gap-5 w-full">
        <div className="col-span-3">
          <div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <span className="text-xs font-bold text-gray-800">
              {review} reviews
            </span>
          </div>

          <div className="mt-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="col-span-1 border border-gray-500 rounded-sm px-5 py-5 flex items-center">
                <FaRegUser className="mr-4 text-2xl" />
                {seating}
              </div>

              <div className="col-span-1 border border-gray-500 rounded-sm px-5 py-5 flex items-center">
                <TfiPanel className="mr-4 text-2xl" />
                {transmission}
              </div>

              <div className="col-span-1 border border-gray-500 rounded-sm px-5 py-5 flex items-center">
                <BsFuelPump className="mr-4 text-2xl" />
                {fuelType}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-5">
              <h1 className="text-xl font-bold">Refueling</h1>
              <p>{refuelingNote}</p>
            </div>

            <div className="mb-5">
              <h1 className="text-xl font-bold">Car Wash</h1>
              <p>{WashNote}</p>
            </div>

            <div className="mb-5">
              <h1 className="text-xl font-bold">No Smoking</h1>
              <p>{smokingNote}</p>
            </div>
          </div>

          <div className="grid grid-cols-4 border-t border-gray-500 pt-5">
            <div className="col-span-1">
              <h1 className="text-1xl font-bold">Include</h1>
            </div>

            <div className="col-span-3">
              <ul className="grid grid-flow-col grid-rows-3  grid-cols-2">
                {includeList}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-4 mt-5 border-t border-gray-500 pt-5">
            <div className="col-span-1">
              <h1 className="text-1xl font-bold">Not Included</h1>
            </div>

            <div className="col-span-3">
              <ul className="grid grid-flow-col grid-rows-3  grid-cols-2">
                {notincludeList}
              </ul>
            </div>
          </div>
        </div>

        {/* right side */}

        <div>
          <BookingCar id={id} pricePerDay={pricePerDay} />
        </div>
      </div>
    </div>
  );
};

export default SingleCarDetails;
