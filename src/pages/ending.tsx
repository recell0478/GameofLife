import { Link } from "react-router-dom";

const Ending = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[90vh]">
        <div>
          <h1 className="font-merriweather font-bold text-xl md:text-3xl lg:text-5xl text-center items-center mx-5 md:mx-0">Congratulations! You made it through </h1>

          <div>
            <h1 className="font-merriweather font-bold text-3xl md:text-5xl lg:text-7xl text-center items-center mt-20 mx-5 md:mx-0">Game Of</h1>
          </div>

          <div className="flex items-center justify-center">
            <img
                src="src/assets/life.png" // Ensure the path is correct
                alt="image"
                className="md:w-4/5 lg:w-full h-auto" // Adjusted width to make the image larger
              />
          </div>

          <div className="mx-5 md:mx-0">
            <div className="max-w-sm flex flex-col gap-10 md:gap-0 md:flex-row justify-between m-auto">
              <Link to="/" className="bg-[#115aad] rounded-lg py-3 px-9 text-[#ffffff] font-poppins text-center">Play Again!</Link>
              
              <Link to="/resources" className="bg-[#115aad] rounded-lg py-3 px-5 text-[#ffffff] font-poppins text-center">More Resources!</Link>
            </div>
          </div>

        </div>
      </div>
      <footer className="w-full bg-[#115aad] h-[7rem] flex items-center justify-center">
        <div className="container mx-auto text-white text-center"></div>
      </footer>
    </>
  );
};

export default Ending;