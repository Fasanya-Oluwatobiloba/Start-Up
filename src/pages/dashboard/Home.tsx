import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <header className="flex justify-between items-center px-4 py-3 bg-black text-white">
        <div className="font-bold text-lg">LOGO</div>
        <div className="flex items-center space-x-4">
          <button>
            <i className="fas fa-moon"></i> {/* Replace with an actual moon icon */}
          </button>
          <button>
            <i className="fas fa-bars"></i> {/* Replace with an actual menu icon */}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4 bg-purple-200">
        <h1 className="text-4xl font-serif text-black">
          Hello <br />
          <span className="text-blue-600 font-bold">TOBY</span>
        </h1>
        <Link to='/courses' className="mt-6 px-8 py-3 bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-semibold text-lg rounded-full flex items-center shadow-lg hover:scale-105 transform transition">
          GET STARTED
          <span className="ml-2">
            <i className="fas fa-arrow-right"></i> {/* Replace with actual arrow icon */}
          </span>
        </Link>
        <p className="mt-6 text-gray-700 text-sm max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio
          felis, sollicitudin sit amet ligula sed, ornare pretium magna.
          Praesent justo lectus, posuere id eleifend quis, volutpat in nisi.
          Vestibulum ipsum turpis, suscipit sed accumsan ac, tempus quis nunc.
          Maecenas molestie magna non enim aliquet, eget condimentum metus
          pellentesque. Curabitur venenatis libero a quam tincidunt pellentesque.
        </p>
      </main>

      {/* Footer / Bottom Navigation */}
      <footer className="bg-purple-600 text-white">
        <div className="flex justify-around items-center py-3">
          <button className="flex flex-col items-center text-xs">
            <img className="fas fa-home text-2xl" />
            HOME
          </button>
          <Link to='/courses' className="flex flex-col items-center text-xs">
            <i className="fas fa-book text-2xl"></i> {/* Replace with book icon */}
            COURSES
          </Link>
		  <button className="flex flex-col items-center text-xs">
            <i className="fas fa-book text-2xl"></i> {/* Replace with book icon */}
          </button>
          <button className="flex flex-col items-center text-xs bg-white text-purple-600 rounded-full p-2 shadow-lg">
            <i className="fas fa-briefcase text-2xl"></i> {/* Replace with briefcase icon */}
            MOCK CBT
          </button>
          <button className="flex flex-col items-center text-xs">
            <i className="fas fa-cog text-2xl"></i> {/* Replace with cog icon */}
            SETTINGS
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
