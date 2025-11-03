import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Title from "../../components/owner/Title";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookingsData } from "../../redux/carThunk";
import API from "../../utils/owner/axios";

const ManageBooking = () => {
  const dispatch = useDispatch();
  const { bookings, loading, error } = useSelector((state) => state.booking);

  const currency = import.meta.env.VITE_CURRENCY;

  useEffect(() => {
    console.log(bookings)
    dispatch(getAllBookingsData());
  }, [dispatch]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await API.put(`/booking/${id}/status`, { status: newStatus });
      dispatch(getAllBookingsData()); // Refresh bookings after update
    } catch (err) {
      console.error("Failed to update status:", err.message);
    }
  };

  const columns = [
    {
      field: "fullName",
      headerName: "User Name",
      width:200,
      renderCell : (params) => <div>{params.row.fullName}</div>
    },
    {
      field: "vehicle",
      headerName: "Car",
      width: 300,
      renderCell: (params) => {
        const vehicle = params.row.vehicle;
        if (!vehicle) return null;

        return (
          <div className="flex items-center">
            <div>
              <img src={vehicle.thumbnail} alt="" className="w-20 rounded-xl" />
            </div>
            <div>
              <p className="font-semibold ml-5">{vehicle.brand} {vehicle.model}</p>
            </div>
          </div>
        );
      },
    },
    {
      field: "pickupDate",
      headerName: "Pickup Date",
      width: 150,
      renderCell: (params) => <div>{params.row.pickupDate?.split("T")[0]}</div>,
    },
    {
      field: "returnDate",
      headerName: "Return Date",
      width: 150,
      renderCell: (params) => <div>{params.row.returnDate?.split("T")[0]}</div>,
    },
    {
      field: "totalPrice",
      headerName: "Total",
      width: 110,
      renderCell: (params) => <div>{currency} {params.row.totalPrice}</div>,
    },
    {
      field: "payment",
      headerName: "Payment",
      width: 130,
      renderCell: () => (
        <div className="flex items-center h-full w-full">
          <p className="h-auto px-3 py-1 rounded-full text-xs text-center text-gray-600">Online</p>
        </div>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) =>
        params.row.status === "pending" ? (
          <select
            value={params.row.status}
            className="px-2 py-1.5 mt-1 text-gray-500 border border-gray-500 rounded-md outline-none"
            onChange={(e) => handleStatusChange(params.row._id, e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
            <option value="confirmed">Confirmed</option>
          </select>
        ) : (
          <span
            className={`px-3 py-1 rounded-full text-xs font-demibold ${
              params.row.status === "confirmed"
                ? "bg-green-100 text-green-500"
                : "bg-red-100 text-red-500"
            }`}
          >
            {params.row.status}
          </span>
        ),
    },
  ];

  if (loading) return <p className="p-4">Loading bookings...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error.message}</p>;

  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title
        title="Manage Bookings"
        subTitle="View, update, and track all customer bookings in one place."
      />

      <div className="mt-5">
        <Box sx={{ width: "90%" }}>
          <DataGrid
            rows={bookings}
            columns={columns}
            getRowId={(row) => row._id}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5 },
              },
            }}
            pageSizeOptions={[5]}
          />
        </Box>
      </div>
    </div>
  );
};

export default ManageBooking;
