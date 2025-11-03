import { useEffect } from "react";
import Title from "../components/Title";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getUserBooking } from "../redux/carThunk";

const MyBooking = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser?.id;

  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.booking);

  console.log(bookings);

  useEffect(() => {
    if (userId) {
      dispatch(getUserBooking(userId));
    }
  }, [dispatch, userId]);

  return (
    <>
      <div className="md:min-h-screen">
        <div className="pt-14">
          <Title
            heading="My Bookings"
            subheading="View and manage all your car bookings"
          />
        </div>

        <div className="max-w-7xl mx-auto mb-5 md:px-5 px-2">
          {bookings.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              No bookings found.
            </p>
          ) : (
            bookings.map((booking, i) => (
              <div
                key={booking._id}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 border border-gray-500 rounded-lg mt-5 first:mt-12 p-5"
              >
                {/* Vehicle info */}
                <div className="md:col-span-1">
                  <div className="rounded-md overflow-hidden mb-3">
                    <img
                      src={booking.vehicle?.thumbnail}
                      alt={booking.vehicle?.make}
                      className="w-full h-auto aspect-video object-cover"
                    />
                  </div>
                  <p className="font-bold">
                    {booking.vehicle?.make} {booking.vehicle?.model}
                  </p>
                  {/* <p>
                  {booking.vehicle?.year} • {booking.pickupLocation}
                </p> */}
                </div>

                {/* Booking info */}
                <div className="md:col-span-1">
                  <div className="flex items-center gap-2">
                    <p className="px-3 py-1.5 bg-gray-300 rounded">
                      Booking #{i + 1}
                    </p>
                    <p
                      className={`px-3 py-1 text-xs rounded-full 
                                ${
                                  booking.status === "confirmed"
                                    ? "bg-green-400/15 text-green-600"
                                    : booking.status === "pending"
                                    ? "bg-yellow-400/15 text-yellow-600"
                                    : "bg-red-400/15 text-red-600"
                                }`}
                    >
                      {booking.status}
                    </p>
                  </div>

                  <div className="flex items-start gap-2 mt-3">
                    <FaCalendarAlt className="mt-1" />
                    <div>
                      <p className="text-gray-500">Rental Period</p>
                      <p className="md:text-sm">
                        {booking.pickupDate.split("T")[0]} To{" "}
                        {booking.returnDate.split("T")[0]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mt-3">
                    <IoLocationSharp className="mt-1" />
                    <div>
                      <p className="text-gray-500">Pickup Location</p>
                      <p>{booking.pickupLocation}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mt-3">
                    <IoLocationSharp className="mt-1" />
                    <div>
                      <p className="text-gray-500">Drop Location</p>
                      <p>{booking.dropoffLocation}</p>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="md:col-span-1 flex flex-col justify-between gap-6">
                  <div className="text-sm text-gray-500 text-right">
                    <p>Total Price:</p>
                    <h1 className="text-2xl font-semibold text-blue-500">
                      {currency} {booking.totalPrice}
                    </h1>
                    <p>Booked on: {booking.createdAt.split("T")[0]}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default MyBooking;
