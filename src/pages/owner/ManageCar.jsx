import { useEffect, useState } from "react";
import Title from "../../components/owner/Title";
import { dummyCarData } from "./../../assets/booking/assets";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { MdDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";

const ManageCar = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [car, setCar] = useState([]);

  useEffect(() => {
    setCar(dummyCarData);
  }, []);

  const columns = [
    {
      field: "brand",
      headerName: "Car",
      width: 350,
      renderCell: (params) => {
        return (
          <div className="flex">
            <div>
              <img
                src={params.row?.image}
                className="w-15 my-2 mr-2 rounded-lg"
              />
            </div>
            <div className="flex flex-wrap">
              <p className="font-semibold w-full">
                {params.row?.brand} {params.row?.model}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
    },
    {
      field: "pricePerDay",
      headerName: "Price",
      width: 110,
      renderCell: (value) => {
        return (
          <div>
            <p>
              {currency} {value.row?.pricePerDay}
            </p>
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      renderCell: (value) => {
        return (
          <div className="flex items-center justify-center h-full w-full">
            <p
              className={`h-auto px-3 py-1 rounded-full text-xs text-center ${
                value.row?.isAvaliable
                  ? "bg-green-100 text-green-500"
                  : "bg-red-100 text-red-500"
              }`}
            >
              {" "}
              {value.row?.isAvaliable ? "Avilabel" : "Unavilable"}
            </p>
          </div>
        );
      },
    },

    {
      field: "actionButton",
      headerName: "Action",
      width: 150,
      renderCell: (value) => {
        return (
          <>
            <div className="flex items-center pt-2 text-xl">
              <p className="mr-2 cursor-pointer">
                {value.row?.isAvaliable ? <GoEyeClosed /> : <FaRegEye />}
              </p>
              <p className="cursor-pointer">
                <MdDelete />
              </p>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="px-4 pt-10 md:px-10 flex-1">
        <Title
          title="Manage Cars"
          subTitle="Easily view, update, and manage your fleet of cars available for rental."
        />

        {/* Data Table */}
        <div className="mt-5">
          <Box sx={{ width: "80%" }}>
            <DataGrid
              rows={car}
              columns={columns}
              getRowId={(row) => row._id}
              sx={{
                "& .MuiDataGrid-cell[data-field='status']": {
                  justifyContent: "center",
                },
              }}
              // getRowClassName={() => "py-2"}

              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      </div>
    </>
  );
};

export default ManageCar;
