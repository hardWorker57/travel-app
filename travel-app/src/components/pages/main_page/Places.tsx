import { FC } from "react";
import BlockTitle from "../../ui/BlockTitle";

// type Props = {};
type Place = {
  title: string;
  img: string;
};
type BlockTitleType = {
  title: string;
  description: string;
  button: string;
};

const data: BlockTitleType = {
  title: "Plan your perfect trip",
  description: "Search Flights & Places Hire to our most popular destinations",
  button: "See more places"
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
    },
    {
        "title": "Paris, France",
        "img": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSup4FxP54mRgNEtJRjXQOt0GwCf2Wjh-gysqkAy12T5eQCYnwSqDAGwo3HUvId31uQ5t3ZIGLGFDGePQJS-uWv4mpRC1v4ywhX8IPecg"
    },
    {
        "title": "New York, US",
        "img": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQi8L7ANB9PPYAXoz6sVI9LyxAmMcl9yAyReRuZ_IjiGU0zVTvSuuWDgQZvXheiYt6QbZ9OtmYxKmQxbFidkuId1ACOVTUK4qsViU3SJA"
    },
    {
        "title": "London, UK",
        "img": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRGQjRiDpsaU2knNgWKXAZEhzHVQyFMwY7XsO4SmYrR3O6WUW3QwUnjioFGGJgv8A6i-gURpH3qPZMLoz5RkIR5_GYqVIrcE0Y57c03AQ"
    },
    {
        "title": "Tokyo, Japan",
        "img": "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "title": "Dubai, UAE",
        "img": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSj8W51xPXA3RcWauCPS8Gdm1q-I9F80WhnXgQHEwqBZcBKxYdNPbLgvG0X7bQVeqVrTpI9oN74wSFk4dbAwHrZHEdWMMqBdlVACNHXPg"
    }
]

const Places: FC = () => {
  return (
    <div>
      <BlockTitle data={data} />
      <div className="mx-auto max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        <div className="pt-6 gap-7 grid grid-flow-row grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {places.map((place) => (
                <div className="card adelay hover:scale-105 cursor-pointer flex items-center gap-x-4 p-4 shade rounded-xl">
                    <img className="max-w-24 h-24 rounded-xl object-cover" src={place.img} alt="" />
                    <div>
                        <div className="text-2xl">{place.title}</div>
                        <div>Flights • Hotels • Resorts</div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
