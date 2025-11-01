import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import SuccefullyPopUp from "./SuccefullyPopUp";
import { useState } from "react";
import API from "../utils/owner/axios";
import SuccefullyPopUp from "./SuccefullyPopUp";

const BookingSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short")
    .max(20, "Too Long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  pickupLocation: Yup.string().required("Required"),
  pickupDate: Yup.date().required("Required"),
  returnDate: Yup.date().required("Required"),
  dropoffLocation: Yup.string().required("Required"),
});
const BookingCar = ({ id, pricePerDay }) => {
  console.log(pricePerDay);

  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = async (values) => {
    try {
      const userRaw = localStorage.getItem("user");
      const user = userRaw ? JSON.parse(userRaw) : null;

      if (!user || !user.id) {
        alert("Please log in before making a booking.");
        return;
      }

      const pickupDate = new Date(values.pickupDate);
      const returnDate = new Date(values.returnDate);
      const diffTime = returnDate - pickupDate;
      const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

      const amount = totalDays * pricePerDay * 100;

      const bookingData = {
        vehicle: id,
        user: user.id,
        totalPrice: amount / 100,
        pickupDate: values.pickupDate,
        returnDate: values.returnDate,
        pickupLocation: values.pickupLocation,
        dropoffLocation: values.dropoffLocation,
      };

      // Create Razorpay order & backend booking
      const { data } = await API.post("/payments/create-order", {
        amount,
        bookingData,
      });

      if (!data.success) {
        console.error("Booking creation failed:", data.message);
        alert("Booking failed: " + (data.message || "Unknown error"));
        return;
      }

      const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;

      const options = {
        key: RAZORPAY_KEY,
        amount: data.order.amount,
        currency: "INR",
        name: "Car Rental Service",
        description: "Car Booking Payment",
        order_id: data.order.id,
        handler: async function (response) {
          try {
            await API.post("/payments/verify-payment", {
              ...response,
              bookingId: data.booking._id,
              method: "upi",
            });
            // alert("Payment Successful! Booking Confirmed.");
            setIsSuccess(true); 
            resetForm();
            
          } catch (err) {
            console.error(
              "Payment verification failed:",
              err.response?.data || err.message
            );
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: values.fullName,
          email: values.email,
          contact: values.phone,
        },
        theme: { color: "#04DBC0" },
      };

      setIsSuccess(true);
      const rzp = new window.Razorpay(options);
      rzp.open();
      resetForm();
    } catch (error) {
      console.error(
        "Error in handlePayment:",
        error.response?.data || error.message
      );
      alert("Something went wrong while creating the booking or payment.");
    }
  };

  //   if (isSuccess) {
  //   return <SuccefullyPopUp />; // Show success component
  // }

  return (
    <>

          {isSuccess && <SuccefullyPopUp onClose={() => setIsSuccess(false)} />}


      <div className="border-1 border-black rounded-sm px-4 py-4">
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            pickupLocation: "",
            pickupDate: "",
            dropoffLocation: "",
            returnDate: "",
          }}
          validationSchema={BookingSchema}
          onSubmit={(values, { resetForm }) => handlePayment(values)}
        >
          <Form>
            <div className="basis-1/2 mb-5">
              <label className="block text-sm font-semibold text-gray-900">
                Full Name
              </label>
              <Field
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="basis-1/2 mb-5">
              <label className="block text-sm font-semibold text-gray-900">
                Email Address
              </label>
              <Field
                type="email"
                name="email"
                placeholder="sample@gmail.com"
                className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="basis-1/2 mb-5">
              <label className="block text-sm font-semibold text-gray-900">
                Phone
              </label>
              <Field
                type="text"
                name="phone"
                placeholder="Number"
                className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="basis-1/2 mb-5">
              <label className="block text-sm font-semibold text-gray-900">
                Pickup Address
              </label>
              <Field
                type="text"
                name="pickupLocation"
                placeholder="Pickup location"
                className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              <ErrorMessage
                name="pickupLocation"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="basis-1/2 mb-5">
              <label className="block text-sm font-semibold text-gray-900">
                Pickup Date
              </label>
              <Field
                type="date"
                name="pickupDate"
                placeholder="Pickup Date"
                className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              <ErrorMessage
                name="pickupDate"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="basis-1/2 mb-5">
              <label className="block text-sm font-semibold text-gray-900">
                Drop Off Address
              </label>
              <Field
                type="text"
                name="dropoffLocation"
                placeholder="Drop Off Address"
                className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              <ErrorMessage
                name="dropoffLocation"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="basis-1/2 mb-5">
              <label className="block text-sm font-semibold text-gray-900">
                Drop Off Date
              </label>
              <Field
                type="date"
                name="returnDate"
                placeholder="Drop Off Date"
                className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              <ErrorMessage
                name="returnDate"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-[#04DBC0] text-white w-full py-2 rounded hover:bg-[#5cebd8] cursor-pointer"
            >
              Pay & Book Car
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default BookingCar;
