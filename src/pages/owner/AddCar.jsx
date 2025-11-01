import { useState } from "react";
import Title from "../../components/owner/Title";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import API from "../../utils/axios";

const CarSchema = Yup.object().shape({
  brand: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Brand is required"),
  model: Yup.string().required("Model is required"),
  year: Yup.number()
    .min(2000, "Too old!")
    .max(new Date().getFullYear(), "Invalid year")
    .required("Year is required"),
  type: Yup.string().required("Car type is required"),
  fuelType: Yup.string().required("Fuel type is required"),
  transmission: Yup.string().required("Transmission is required"),
  seatingCapacity: Yup.number()
    .min(2, "At least 2 seats")
    .required("Seats required"),
  pricePerDay: Yup.number()
    .min(100, "Price too low")
    .required("Price required"),
  description: Yup.string().required("Description required"),
});

const AddCar = () => {
  const [image, setImage] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [includeInput, setIncludeInput] = useState("");
  const [notIncludeInput, setNotIncludeInput] = useState([]);

  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title
        title="Add New Car"
        subTitle="Fill in details to list a new car for booking, including pricing, availability, and car specification."
      />

      <div className="mt-5">
        <Formik
          initialValues={{
            brand: "",
            model: "",
            year: "",
            type: "",
            fuelType: "",
            transmission: "",
            seatingCapacity: "",
            pricePerDay: "",
            description: "",
            thumbnail: "",
            images: [],
            include: [],
            notInclude: [],
          }}
          validationSchema={CarSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const formData = new FormData();
              Object.entries(values).forEach(([key, value]) => {
                if (["include", "notInclude", "carImage", "carGallery"].includes(key)) return;
                formData.append(key, value);
              });

              // Arrays
              values.include.forEach((item) => formData.append("include", item));
              values.notInclude.forEach((item) => formData.append("notInclude", item));

              // Files
              if (values.carImage) formData.append("thumbnail", values.carImage);
              if (values.carGallery.length > 0) {
                values.carGallery.forEach((file) => formData.append("images", file));
              }

              const res = await API.post("/cars/add-car", formData, {
                headers: { "Content-Type": "multipart/form-data" },
              });

              console.log("Vehicle created:", res.data);

              resetForm();
              setImage(null); 
              setGallery([]);
              alert("Car listed successfully!");
            } catch (err) {
              console.error("Error uploading car:", err.response?.data || err.message);
              alert("Failed to list car. Try again.");
            }
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="">
              {/* 1st row */}
              <div className="flex gap-5 mb-5">
                <div className="basis-1/2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Car Brand
                  </label>
                  <Field
                    type="text"
                    name="brand"
                    placeholder="Brand (e.g., Toyota)"
                    className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  <ErrorMessage
                    name="brand"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="basis-1/2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Car Model
                  </label>
                  <Field
                    type="text"
                    name="model"
                    placeholder="Model (e.g., Camry)"
                    className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  <ErrorMessage
                    name="model"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* 2nd row */}
              <div className="flex gap-5 mb-5">
                <div className="basis-1/2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Year
                  </label>
                  <Field
                    type="number"
                    name="year"
                    placeholder="2023"
                    className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  <ErrorMessage
                    name="year"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="basis-1/2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Car Type
                  </label>
                  <Field
                    as="select"
                    name="type"
                    className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  >
                    <option value="">Select Car Type</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Convertible">Convertible</option>
                  </Field>
                  <ErrorMessage
                    name="type"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* 3rd row */}
              <div className="flex gap-5 mb-5">
                <div className="basis-1/2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Fuel Type
                  </label>
                  <Field
                    as="select"
                    name="fuelType"
                    className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  >
                    <option value="">Select Fuel Type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                  </Field>
                  <ErrorMessage
                    name="fuelType"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="basis-1/2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Transmission
                  </label>
                  <Field
                    as="select"
                    name="transmission"
                    className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  >
                    <option value="">Select Transmission</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </Field>
                  <ErrorMessage
                    name="transmission"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* 4th row */}
              <div className="flex gap-5 mb-5">
                <div className="basis-1/2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Seats
                  </label>
                  <Field
                    type="number"
                    name="seatingCapacity"
                    placeholder="5"
                    className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  <ErrorMessage
                    name="seatingCapacity"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="basis-1/2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Per Day Price
                  </label>
                  <Field
                    type="number"
                    name="pricePerDay"
                    placeholder="1500"
                    className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  <ErrorMessage
                    name="pricePerDay"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* 5th row - file inputs */}
              <div className="flex gap-5 mb-5">
                <div className="basis-1/2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Upload Car Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setImage(file);
                      setFieldValue("carImage", file);
                    }}
                    className="block w-full mt-2.5 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>

                <div className="basis-1/2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Upload Gallery
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files);
                      setGallery(files);
                      setFieldValue("carGallery", files);
                    }}
                    className="block w-full mt-2.5 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              {/* sixth row */}

              <div className="flex gap-5 mb-5">
                <div className="flex-1/2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Include
                  </label>
                  <div className="mt-2.5 flex">
                    <input
                      type="text"
                      value={includeInput}
                      onChange={(e) => setIncludeInput(e.target.value)}
                      placeholder="Include"
                      className="block w-full rounded-md border px-3.5 py-2"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (includeInput.trim() !== "") {
                          setFieldValue("include", [
                            ...values.include,
                            includeInput,
                          ]);
                          setIncludeInput("");
                        }
                      }}
                      className="bg-green-500 text-white px-4 rounded ml-2"
                    >
                      ADD
                    </button>
                  </div>

                  <ul className="mt-2 text-sm text-green-600">
                    {values.include.map((item, i) => (
                      <li key={i}>
                        ✔ {item}{" "}
                        <button
                          type="button"
                          onClick={() => {
                            const updated = values.include.filter(
                              (_, idx) => idx !== i
                            );
                            setFieldValue("include", updated);
                          }}
                          className="text-sm bg-red-600 text-white px-2 rounded"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1/2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Not Include
                  </label>
                  <div className="mt-2.5 flex">
                    <input
                      type="text"
                      value={notIncludeInput}
                      onChange={(e) => setNotIncludeInput(e.target.value)}
                      placeholder="Not Include"
                      className="block w-full rounded-md border px-3.5 py-2"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (notIncludeInput.trim() !== "") {
                          setFieldValue("notInclude", [
                            ...values.notInclude,
                            notIncludeInput,
                          ]);
                          setNotIncludeInput("");
                        }
                      }}
                      className="bg-red-500 text-white px-4 rounded ml-2"
                    >
                      ADD
                    </button>
                  </div>

                  <ul className="mt-2 text-sm text-red-600">
                    {values.notInclude.map((item, i) => (
                      <li key={i}>
                        ✘ {item}
                        <button
                          type="button"
                          onClick={() => {
                            const updated = values.notInclude.filter(
                              (_, idx) => idx !== i
                            );
                            setFieldValue("notInclude", updated);
                          }}
                          className="text-sm bg-red-600 text-white px-2 rounded"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Description */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-900">
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Car description"
                  className="block mt-2.5 w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-900 hover:bg-blue-700 text-white py-3 px-5 rounded cursor-pointer"
                >
                  List Your Car
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddCar;
