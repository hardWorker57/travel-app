import Places from './pages/main_page/Places'
import FlightsHotels from './pages/main_page/FlightsHotels'
import Reviews from './pages/main_page/Reviews'

type Props = {}

const Main = (props: Props) => {
  return (
    <div>
      <Places />
      <FlightsHotels />
      <Reviews />
    </div>
  )
}

export default Main