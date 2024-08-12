import { useSelector } from "react-redux";
import BlockTitle from "../../ui/BlockTitle";

type Props = {};
type BlockTitleType = {
  title: string;
  description: string;
  button: string;
};
type Flights = {
  title: string;
  desc: string;
  price: number;
  img: string;
}

const data: BlockTitleType = {
  title: "Let's go places together",
  description: "Discover the latest offers and news and start planning your next trip with us.",
  button: "See All"
}
const data2: BlockTitleType = {
  title: "Fall into travel",
  description: "Going somewhere to celebrate this season? Whether you're going home or somewhere to roam, we've got the travel tools to get you to your destination.",
  button: "See All"
}
const flights: Flights[] = [
  {
    title: 'Melbourne',
    desc: 'An amazing journey',
    price: 700,
    img: 'https://content.r9cdn.net/rimg/dimg/e7/e2/a092e93b-city-13998-1641eaba8a3.jpg?width=1366&height=768&xhint=1016&yhint=1024&crop=true'
  },
  {
    title: 'Paris',
    desc: 'A Paris Adventure',
    price: 600,
    img: 'https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg'
  },
  {
    title: 'London',
    desc: 'London eye adventure',
    price: 350,
    img: 'https://babylontours.com/wp-content/uploads/2016/09/london-441853_960_720.jpg'
  },
  {
    title: 'Columbia',
    desc: 'Amazing streets',
    price: 700,
    img: 'https://babylontours.com/wp-content/uploads/2016/09/london-441853_960_720.jpg'
  }
]

const Flights = (props: Props) => {

  const count = useSelector((state) => state.counter.value);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-3xl">{count}</div>
      <BlockTitle data={data} />
      <BlockTitle data={data2} />
      <div className="flex justify-between gap-x-5 pt-8 pb-16">
        {flights.map((el) => (
          <div className="text-white relative flex flex-col justify-end w-1/4 h-96 overflow-hidden cursor-pointer rounded-3xl">
            <img className="object-cover h-full brightness-90 hover:scale-110 adelay" src={el.img} alt="" />
            <div className="absolute p-4 w-full flex flex-col gap-y-2">
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <div className="text-lg font-semibold">{el.title}</div>
                  <div className="text-sx">{el.desc}</div>
                </div>
                <div className="text-2xl">$ {el.price}</div>
              </div>
              <button className="btn dark text-black hover:scale-105 p-2">Book Flight</button>
            </div>
          </div>
        ))}
      </div>
      <BlockTitle data={data2} />
    </div>
  )
};

export default Flights;
