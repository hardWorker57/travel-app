import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "../../ui/BlockTitle";
import { div } from "three/examples/jsm/nodes/Nodes.js";

type BlockTitleType = {
  title: string;
  description: string;
  button: string;
};
type ReviewsType = {
  title: string;
  desc: string;
  stars?: number;
  name: string;
  placeName: string;
  img?: string;
};

const data: BlockTitleType = {
  title: "Reviews",
  description: "What people says about Golobe facilities",
  button: "See All",
};
const reviews: ReviewsType[] = [
  {
    title: "“A real sense of community, nurtured”",
    desc: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    stars: 4,
    name: "Olga",
    placeName: "Weave Studios – Olympic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5iXKvoy70BHIa9jyXVQ7LhDG_jci7grD0LA&s",
  },
  {
    title: "“The facilities are superb. Clean, slick, bright.”",
    desc: "“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle",
    stars: 3,
    name: "Thomas",
    placeName: "Weave Studios – Olympic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5iXKvoy70BHIa9jyXVQ7LhDG_jci7grD0LA&s",
  },
  {
    title: "“A real sense of community, nurtured”",
    desc: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    stars: 2,
    name: "Thomas",
    placeName: "Weave Studios – Olympic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5iXKvoy70BHIa9jyXVQ7LhDG_jci7grD0LA&s",
  },
  {
    title: "“The facilities are superb. Clean, slick, bright.”",
    desc: "“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle",
    stars: 5,
    name: "Eliot",
    placeName: "Weave Studios – Olympic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5iXKvoy70BHIa9jyXVQ7LhDG_jci7grD0LA&s",
  },
];

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <BlockTitle data={data} />
      <div className="py-20">
        <Swiper spaceBetween={50} slidesPerView={3}>
          <div className="">
            <div className="flex justify-between w-full">
              {reviews.map((el) => (
                <SwiperSlide className="pb-10">
                  <div className="flex flex-col gap-y-2 shadow_2 border p-6 rounded-2xl">
                    <div className="text-4xl">{el.title}</div>
                    <div className="text-base text-gray-400">{el.desc}</div>
                    <div className="flex">{el.stars}</div>
                    <div className="text-xl font-semibold">{el.name}</div>
                    <div className="text-base text-gray-400">{el.placeName}</div>
                    <div className="text-gray-500 text-base">Google</div>
                    <img className="rounded-lg" src={el.img} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
      </div>
    </div>  
  );
};

export default Reviews;
