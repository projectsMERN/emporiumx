import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-2">
      <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Introducing our
        <span className="bg-gradient-to-r from-indigo-900 to-pink-800 text-transparent bg-clip-text">
          {" "}
          brand new store
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      With Tata Play, we promise you Fun, Personalisation, Flexibility, Freedom, Quality, Innovation and Connection. With Tata Play, you Play Better. And entertainment becomes aur bhi Jingalala.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="/"
          className="text-white bg-gradient-to-r from-indigo-900 to-pink-800 py-3 px-4 mx-3 rounded-md"
        >
          Explore
        </a>
        {/* <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a> */}
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;