import Title from "../../components/owner/Title";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import API from "../../utils/axios";

const AddBlogs = () => {
  const BlogSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Brand is required"),
    information: Yup.string()
      .min(2, "Too Short!")
      .max(500, "Too Long!")
      .required("Information Required"),
  });

  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title
        title="Add Blogs"
        subTitle="Everything about cars, rentals, and road trips"
      />

      <div className="mt-5">
        <Formik
          initialValues={{
            title: "",
            image: "",
            information: "",
          }}
          validationSchema={BlogSchema}
          onSubmit={async (values, { resetForm }) => {

            if (!values.image) {
              alert("Please Upload Image");
              return
            }

            const formData = new FormData();

            formData.append("title", values.title);
            formData.append("information", values.information);
            formData.append("image", values.image);
            

            try {
              const res = await API.post("/blog/add-blog", formData, {
                headers: { "Content-Type": "multipart/form-data" },
              });
              alert("Blog added successfully!");
              resetForm();
            } catch (error) {
              console.error(
                "Blog Add Error:",
                error.response?.data || error.message
              );
              alert("Failed to add blog");
            }
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="">
              {/* 1st row */}
              <div className="flex gap-5 mb-5">
                <div className="basis-1/2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Blog Title
                  </label>
                  <Field
                    type="text"
                    name="title"
                    placeholder="Blog Title"
                    className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="basis-1/2">
                  <div className="flex justify-between">
                    <div className="basis-1/2">
                      <label className="block text-sm font-semibold text-gray-900">
                        Upload Car Image
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          setFieldValue("image", file);
                        }}
                        className="block w-full mt-2.5 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    </div>
                    <div className="basis-1/2">
                      {values.image && (
                        <img
                          src={URL.createObjectURL(values.image)}
                          alt="Preview"
                          className="mt-3 w-full h-28 object-cover rounded-md border ml-5"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 2nd row */}
              <div className="flex gap-5 mb-5">
                <div className="basis-1/1">
                  <label className="block text-sm font-semibold text-gray-900">
                    Blog Information
                  </label>
                  <Field
                    as="textarea"
                    name="information"
                    placeholder="Blog Information"
                    className="block w-full rounded-md mt-2.5 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  <ErrorMessage
                    name="information"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-900 hover:bg-blue-700 text-white py-3 px-5 rounded cursor-pointer"
                >
                  Add Blog
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddBlogs;
