import BlockTitle from "../../ui/BlockTitle";

type Props = {};
type BlockTitleType = {
  title: string;
  description: string;
  button: string;
};
type Place = {
  title: string;
  img: string;
};

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
const places: Place[] = [
  {
      "title": "Istanbul, Turkey",
      "img": "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSYI0tWVGzO-zRds1NJRhLBHEkQAhVaEfdDHFWKLbe0EVOFsoDhAe7KSkq8DbDpT_7QihIeWtbv0xCYb5QgGCxKsz6meUiqYRjasBlepw"
  },
  {
      "title": "Sydney, Australia",
      "img": "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTDiuGxeJyaG2u8E9yw9L9NKoa3fp3wyWLW1ytqwGBkDo-mVHqaiFE7rJ8qZxWMeMZ0RPMHAnlfrP3r12QEgxOwhEOPElhBf_iDggHs2g"
  },
  {
      "title": "Baku, Azerbaijan",
      "img": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRfbcyNrxN1EjDdp5hpinYhz4FfZnDxZTLqz9G75kdpYFZIZ9JGeXsmZbzOXlZ8APYRH3qZqiu7YCE7_3rPLEBmMKarR-YAg0nxogH_1g"
  },
  {
      "title": "Malé, Maldives",
      "img": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcROs5kDQKjUjwBGShAyCmygP-ULdoVApkf_vzaG8mVilXWOoznrLICsZUZJ4lH2rKg4UmR_bvedht7lH_ZBhL7TJYn_n4vdzvBTPnX7yg"
  }
]

const Hotels = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <BlockTitle data={data2} />
      <BlockTitle data={data2} />

      <div className="py-16">
        <div className="text-4xl">Your recent searches</div>
          <div className="pt-6 gap-7 grid grid-flow-row grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
            {places.map((place) => (
                <div className="card adelay hover:scale-105 cursor-pointer flex items-center gap-x-4 ">
                    <img className="max-w-24 h-24 rounded-xl object-cover" src={place.img} alt="" />
                    <div>
                        <div className="text-xl font-semibold">{place.title}</div>
                        <div>325 places</div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
