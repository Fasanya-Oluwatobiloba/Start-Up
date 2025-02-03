import { Link } from "react-router";

const LevelFourLayout = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="bg-purple-200 rounded-xl lg:max-w-lg md:max-w-md max-w-sm w-full">
        <h1 className="text-3xl rounded-t-xl pl-4 py-2 bg-purple-600 text-white font-bold">
          400 LEVEL
        </h1>

        <div className="px-4 py-2 border rounded-md bg-purple-50 hover:bg-purple-100 transition-all mt-3 mx-2">
          <h3 className="text-lg font-bold text-purple-800">GNS 102</h3>
          <p className="text-sm text-gray-900">Use Of english I</p>
          <span className="text-xs text-gray-700 italic">
            Ist Semester
          </span>
        </div>

        <div className="px-4 py-2 border rounded-md bg-purple-50 hover:bg-purple-100 transition-all mt-3 mx-2">
          <h3 className="text-lg font-bold text-purple-800">MTS 102</h3>
          <p className="text-sm text-gray-900">Introduction to Mathematics I</p>
          <span className="text-xs text-gray-700 italic">
            Ist Semester
          </span>
        </div>

        <div className="px-4 py-2 border rounded-md bg-purple-50 hover:bg-purple-100 transition-all mt-3 mx-2">
          <h3 className="text-lg font-bold text-purple-800">PHY 102</h3>
          <p className="text-sm text-gray-900">General Physics I</p>
          <span className="text-xs text-gray-700 italic">
            Ist Semester
          </span>
        </div>

        <Link to='/400CourseList' className="bg-white my-5 mx-3 font-bold text-purple-800 px-3 py-2 rounded-xl inline-block">
          See More
        </Link>
      </div>
    </div>
  );
};

export default LevelFourLayout;
