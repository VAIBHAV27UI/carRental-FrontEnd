import { useState } from "react";

const SearchCar = ({brands, types, sort, search ="Search", onFilter}) => {

  const [brand, setBrand] = useState("")
  const [type, setType] = useState("")
  const [sortBy, setSortBy] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    onFilter({brand, type, sortBy})

  }


  return (
    <>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full">
          <select
            className="w-full outline-none focus:outline-none border border-gray-300 rounded px-3 py-2 bg-white"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">Any Brand</option>

            {brands}
          </select>
        </div>

        <div className="w-full">
          <select
            className="w-full outline-none focus:outline-none border border-gray-300 rounded px-3 py-2 bg-white"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Any Type</option>

            {types}
          </select>
        </div>

        <div className="w-full">
          <select
            className="w-full outline-none focus:outline-none border border-gray-300 rounded px-3 py-2 bg-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sort}
          </select>
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="w-full bg-emerald-700 text-white hover:bg-emerald-500 rounded px-3 py-2 transition-all cursor-pointer"
          >
            {search}
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchCar;
