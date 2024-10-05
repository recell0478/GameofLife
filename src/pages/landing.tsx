import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[90vh]">
        <div>
          <h1 className="font-merriweather text-3xl  md:text-4xl lg:text-8xl text-center mx-5 md:mx-0">
            Game of{" "}
          </h1>
          <div className="flex justify-center mt-8 md:mt-10 lg:mt-12 mb-[30px]">
            <img
              src="src/assets/life.png" // Ensure the path is correct
              alt="image"
              className="md:w-4/5 lg:w-full h-auto" // Adjusted width to make the image larger
            />
          </div>
          <div className="flex items-center justify-center m-auto">
            <Link
              to="/quiz"
              className="bg-[#115aad] rounded-lg py-5 px-10 mx-5 md:mx-0 text-[#ffffff] font-poppins font-bold text-center text-xl md:text-2xl lg:text-3xl" // Adjusted text size
            >
              Take a quiz to learn about financial literacy
            </Link>
          </div>
        </div>
      </div>
      <footer className="mt-[] w-full bg-[#115aad] h-[8rem] flex items-center justify-center"></footer>
    </>
  );
};

export default Landing;
