import { Link } from "react-router";

const LevelFiveLayout = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="bg-purple-200 rounded-xl lg:max-w-lg md:max-w-md max-w-sm w-full">
        <h1 className="text-3xl rounded-t-xl pl-4 py-2 bg-purple-600 text-white font-bold">
          500 LEVEL
        </h1>

        <div className="flex items-center justify-between text-black rounded-3xl py-2 px-3 bg-white mx-2 mt-3">
          <div className="">
            <h2 className="text-base font-bold">MTS 501</h2>
            <p className="text-sm">1st Semester</p>
          </div>
          <p className="rotate-90">▼</p>
        </div>

        <div className="flex items-center justify-between text-black rounded-3xl py-2 px-3 bg-white mx-2 mt-3">
          <div className="">
            <h2 className="text-base font-bold">MTS 501</h2>
            <p className="text-sm">1st Semester</p>
          </div>
          <p className="rotate-90">▼</p>
        </div>

        <div className="flex items-center justify-between text-black rounded-3xl py-2 px-3 bg-white mx-2 mt-3">
          <div className="">
            <h2 className="text-base font-bold">MTS 501</h2>
            <p className="text-sm">1st Semester</p>
          </div>
          <p className="rotate-90">▼</p>
        </div>

        <Link to='/level-five' className=" bg-purple-400 my-5 mx-3 px-3 py-2 rounded-xl inline-block">
          See More
        </Link>
      </div>
    </div>
  );
};

export default LevelFiveLayout;