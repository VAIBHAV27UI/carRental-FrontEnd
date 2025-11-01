import blogAvtar from './../assets/blog-avtar.jpg'

const BlogSidebar = (props) => {
    const {blogTitle = "America Car Rental Offers Lowest Car Rental Rates", avtar = blogAvtar, blogDate = "Jan 2025"} = props
  return (
    <>
        <div className="grid grid-cols-4 gap-4 mt-5 cursor-pointer">

            <div className="col-span-1">
                    <img src={avtar} alt="" className='w-20 h-20 rounded-full' />
            </div>

            <div className='col-span-3'>
                <h2 className='text-md font-semibold hover:text-blue-700'>{blogTitle}</h2>
                <p className='text-[14px] text-gray-400'>{blogDate}</p>
            </div>

        </div>
    </>
  );
};

export default BlogSidebar;
