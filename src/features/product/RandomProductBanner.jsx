function RandomProductBanner() {
  return (
    <div className="flex justify-center">
      <div className="w-9/12 flex justify-center">
        <img
          src="https://d2cva83hdk3bwc.cloudfront.net/fear-of-god-essentials-core-collection-pullover-hoodie-string-1.jpg"
          alt=""
          className="w-4/12 border border-none rounded-lg"
        />
        <div className="w-8/12 flex flex-col justify-center gap-4">
          <p className="text-light">Brown Women Hoodie</p>
          <p className="text-light text-sm text-[#818B9C]">
            Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
            sapien quam risus sed diam.
          </p>
          <div className="flex gap-5">
            <button className="bg-[#1E4C2F] text-[#ffffff] px-5 py-1 rounded-lg">
              Buy 900฿
            </button>
            <button className="border border-[#1E4C2F] rounded-lg text-[#1E4C2F] px-5 py-1">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomProductBanner;
