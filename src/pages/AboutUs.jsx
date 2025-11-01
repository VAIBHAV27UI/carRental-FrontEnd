import Title from "../components/Title";
import carBan from "./../assets/car-banner.jpg";

const AboutUs = () => {
  return (
    <>
      <div
        className="h-screen md:h-100 bg-cover bg-center flex flex-col gap-14 items-center justify-center text-white"
        style={{ backgroundImage: `url(${carBan})` }}
      >
        <Title
          heading="About Us"
          subheading="Your Journey, Our Responsibility"
        />
      </div>

      <div className="my-5">
        <section className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
            <img
              className="max-w-md w-full object-cover rounded-2xl"
              src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
              alt=""
            />
            <div className="gap-1 max-w-72 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white size-16 flex items-center justify-center aspect-square backdrop-blur rounded-full">
              <svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.027 3.371c0-1.374 1.512-2.213 2.678-1.484l9.11 5.693a1.75 1.75 0 0 1 0 2.969l-9.11 5.693c-1.166.729-2.678-.11-2.678-1.484z"
                  fill="#fff"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="text-sm text-slate-600 max-w-lg">
            <h1 className="text-xl uppercase font-semibold text-slate-700">
              What we do?
            </h1>
            <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
            <p className="mt-8">
              At <span className="font-bold">G Car Rental</span>, we believe that renting a car should be
              simple, transparent, and hassle-free. Whether you’re planning a
              weekend getaway, a business trip, or need a reliable ride for
              everyday travel, we’re here to make it happen.
            </p>
            <p className="mt-4">
              Our platform connects you with a wide range of vehicles—from
              compact cars to luxury SUVs—at competitive prices. With secure
              bookings, flexible rental options, and 24/7 customer support, we
              ensure that your journey is smooth from start to finish.
            </p>
            <p className="mt-4">
              We’re more than just a car rental service—we’re your travel
              partner, committed to providing convenience, comfort, and
              reliability every time you hit the road.{" "}
            </p>
            <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white">
              {/* <span>Read more</span> */}
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
