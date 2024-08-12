import { IoPaperPlane } from "react-icons/io5";

type Props = {}

const FlightsHotels = (props: Props) => {
  return (
    <div className='flex flex-wrap gap-5 justify-between max-w-7xl mx-auto py-32 text-white'>
        <div className="flights relative overflow-hidden rounded-3xl mx-auto">
            <img className="adelay hover:scale-110 hover:brightness-75" src="flights.png" alt="" />
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-y-3">
                <div className="text-4xl font-semibold">Hotels</div>
                <div className="text-lg text-center">Search hotels & Places Hire to our most popular destinations</div>
                <div className="flex gap-x-2 items-center p-3 btn dark text-black"><IoPaperPlane /> Show Filghts</div>
            </div>
        </div>
        <div className="hotels relative overflow-hidden rounded-3xl mx-auto">
            <img className="adelay hover:scale-110 hover:brightness-75" src="hotels.png" alt="" />
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-y-3">
                <div className="text-4xl font-semibold">Hotels</div>
                <div className="text-lg text-center">Search hotels & Places Hire to our most popular destinations</div>
                <div className="flex gap-x-2 items-center p-3 btn dark text-black"><IoPaperPlane /> Show Filghts</div>
            </div>
        </div>
    </div>
  )
}

export default FlightsHotels