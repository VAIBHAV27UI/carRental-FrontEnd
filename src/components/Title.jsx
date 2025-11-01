
const Title = ({heading = "Heading Here", subheading = "Sub Heading Here"}) => {
  return (
    <>

    <div className="flex flex-col items-center my-14">
        <h1 className="text-4xl font-bold">{heading}</h1>
        <h6 className="text-gray-400">{subheading}</h6>
    </div>
      
    </>
  )
}

export default Title
