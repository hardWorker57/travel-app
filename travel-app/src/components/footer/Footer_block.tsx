// type Props = {}

const Footer_block = () => {
  return (
    <div className="footer_block rounded-3xl p-6 pb-0 absolute w-full left-1/2 -translate-x-1/2 -top-1/2 max-w-7xl mx-auto">
      <div className="flex justify-between">
        <div className="flex flex-col pb-6 gap-y-3 justify-between">
          <div className="text-6xl pb-4">
            Subscribe <br /> Newsletter
          </div>
          <div className="text-2xl">The Travel</div>
          <div className="text-opacity-70">
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories.
          </div>
          <div className="flex items-center gap-x-5">
            <input
              className="rounded-lg p-4 w-full"
              type="email"
              placeholder="Your email address"
              name=""
              id=""
            />
            <div className="btn bg-black text-white p-4">Subscribe</div>
          </div>
        </div>
        <div>
          <img src="email.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer_block;
