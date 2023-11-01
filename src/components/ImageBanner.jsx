function ImageBanner() {
  return (
    <div className="bg-[#F7F7F7] flex justify-around items-center h-auto">
      <div className="w-1/2 flex flex-col gap-10 p-16">
        <h1 className="text-4xl font-semibold">
          Upgrade Your Wardrobe With Our Collection
        </h1>
        <p>
          Eget neque aenean viverra aliquam tortor diam nunc. Dis pellentesque
          lectus quis velit fusce aenean nunc dui consectetur. Eu lorem est
          ullamcorper nisl amet non mollis.
        </p>
      </div>
      <img src="src/assets/cover.png" alt="cover-image" className="w-1/2" />
    </div>
  );
}

export default ImageBanner;
