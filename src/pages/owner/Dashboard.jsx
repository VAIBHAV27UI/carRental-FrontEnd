import { useEffect, useState } from "react";
import { FaCarSide, FaClipboardList } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import Title from "../../components/owner/Title";
import { MdOutlinePendingActions } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, getAllBookingsData } from "../../redux/carThunk";
import { GiCancel } from "react-icons/gi";

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [data, setData] = useState({
    totalCars: 8,
    totalBooking: 0,
    pendingBooking: 5,
    completedBooking: 0,
    recentBooking: [],
    monthlyReveneue: 0,
  });

  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);
  const { bookings } = useSelector((state) => state.booking);

  const pendingStatus = bookings.filter((data) => data.status === "pending");
  const confirmedStatus = bookings.filter(
    (data) => data.status === "confirmed"
  );
  const cancelledStatus = bookings.filter(
    (data) => data.status === "cancelled"
  );

  const totalRevenue = bookings?.reduce((sum, b) => sum + b.totalPrice, 0);

  useEffect(() => {
    dispatch(fetchCars(cars));
    dispatch(getAllBookingsData(bookings));
  }, [dispatch]);


  const dashboardCard = [
    { title: "Total Cars", value: cars.length, icon: <FaCarSide /> },
    {
      title: "Total Booking",
      value: bookings.length,
      icon: <FaClipboardList />,
    },
    {
      title: "Pending",
      value: pendingStatus.length,
      icon: <MdOutlinePendingActions />,
    },
    {
      title: "Confirmed",
      value: confirmedStatus.length,
      icon: <GiConfirmed />,
    },
    {
      title: "Cancelled",
      value: cancelledStatus.length,
      icon: <GiCancel />,
    },
  ];

  return (
    <>
      <div className="px-4 pt-10 md:px-10 flex-1">
        <Title
          title="Admin Dashboard"
          subTitle="Monitor overall platform perfomance including total cars, bookings, revenue, and recent activities"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 my-8 max-w-7xl">
          {dashboardCard.map((card, index) => (
            <div
              key={index}
              className="flex gap-2 items-center justify-between p-4 rounded-md border border-gray-500"
            >
              <div>
                <h1 className="text-xs text-gray-500">{card.title}</h1>
                <p className="text-lg font-semibold">{card.value}</p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800/10">
                {card.icon}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-start gap-6 mb-8 w-full">
          {/* recent bookings */}
          <div className="p-4 md:p-6 border border-blue-500 rounded-md max-w-xl w-full">
            <h1 className="text-lg font-medium">Recent Bookings</h1>
            <p className="text-gray-500">Latest Customer Booking</p>
            <div className="mt-4 gird items-center justify-between w-full">
              {bookings.map((booking, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 justify-between items-center p-2 border-b max-w-full"
                >
                  <div className="flex items-center gap-2 col-span-1">
                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10">
                      <FaClipboardList />
                    </div>
                    <div>
                      <p>{booking.vehicle?.name}</p>
                      <p className="text-sm text-gray-500">
                        {booking.createdAt?.split("T")[0]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-medium col-span-1 justify-end">
                    <p className="text-sm text-gray-500">
                      {currency} {booking.totalPrice}
                    </p>
                    <p
                      className={`px-3 py-0.5 border-2 rounded-full text-sm ${
                        booking.status === "pending"
                          ? "text-yellow-400 border-yellow-400"
                          : booking.status === "confirmed"
                          ? "text-green-400 border-green-400"
                          : "text-red-400 border-red-400"
                      } `}
                    >
                      {booking.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* monthly revenue */}
          <div className="p-4 md:p-6 border border-blue-500 rounded-md max-w-xl w-full">
            <h1>Total Revenue</h1>
            <p className="text-gray-500">Revenue for current month</p>
            <p className="text-3xl mt-6 font-semibold text-blue-600">
              {currency} {totalRevenue.toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
