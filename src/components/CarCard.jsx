
const CarCard = ({ image , heading }) => {
  return (
    <>
      <div
        className="bg-cover group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer bg-center bg-no-repeat h-64 relative hover:shadow-[0px_5px_5px_rgba(0,0,0,0.3)]"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className='text-white absolute bottom-5 left-5 text-2xl font-bold'>{heading}</h1>
      </div>
    </>
  );
};

export default CarCard;
