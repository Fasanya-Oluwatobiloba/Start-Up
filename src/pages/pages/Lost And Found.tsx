import { Link } from "react-router";

const LostFound = () => {
  return (
    <div>
      <h1 className="text-center text-2xl py-4 bg-purple-500 font-bold">
	  🚫 Lost & Found
      </h1>

		<Link to="/lost" className="fixed bottom-4 right-4 bg-purple-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-lg">
          +
        </Link>
    </div>
	
  );
};

export default LostFound;
