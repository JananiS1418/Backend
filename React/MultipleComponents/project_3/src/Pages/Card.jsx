import image from '../assets/Images/image.jpg'

const Card = () => {
  return (
    <div className=" flex justify-center items-center h-200 bg-gray-700">
      <div className="bg-cyan-600 w-64 rounded-xl shadow-lg p-4 flex flex-col items-center gap-4">
        <img  src={image} alt="Joe Movie" className="w-full h-64 object-cover rounded-lg" />
        <p className="text-xl font-semibold">Joe</p>

        
        <button className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition">
          Book Now
        </button>
      </div>

    </div>
  )
}

export default Card

