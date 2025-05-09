import { Link } from "react-router";
import { useAuth } from "../../stores/Context.js";
import { useEffect, useState, ChangeEvent } from "react";
import Modal from "../../UI/Modal.js";
import airplane from "../../assets/airplane.jpg";

const HomePage = () => {
  const {
    name,
    department,
    faculty,
    level,
    setName,
    setDepartment,
    setFaculty,
    setLevel,
  } = useAuth();

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedDepartment = localStorage.getItem("userDepartment");
    const storedFaculty = localStorage.getItem("userFaculty");
    const storedLevel = localStorage.getItem("userLevel");
    const storedImage = localStorage.getItem("userImage");

    if (storedName) setName(storedName);
    if (storedDepartment) setDepartment(storedDepartment);
    if (storedFaculty) setFaculty(storedFaculty);
    if (storedLevel) setLevel(storedLevel);
    if (storedImage) setProfileImage(storedImage);
  }, [setName, setDepartment, setFaculty, setLevel]);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setProfileImage(reader.result);
          localStorage.setItem("userImage", reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <header className="flex justify-between items-center px-4 py-3 bg-purple-800 text-white z-50">
        <div className="font-bold text-xl text-gray-200 italic">DouLearn</div>

        <div className="flex items-center space-x-2 relative">
          <span className="hidden md:block text-white">{name || "Guest"}</span>
          <p
            onClick={() => setIsModalOpen(true)}
            className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center cursor-pointer"
          >
            👤
          </p>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <p className="text-center text-lg pt-4 pb-1 font-semibold rounded-t-2xl text-gray-800 bg-purple-400">
              {name}
            </p>
            <div className="border-t border-black px-6 py-3">
              <ul className="text-center text-gray-700 space-y-3">
                <li>
                  <Link to="/forgot-password" className="hover:underline">
                    Forgot password?
                  </Link>
                </li>
                <li>
                  <Link to="/home" className="hover:underline">
                    Manage your subscription
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-red-500 font-medium">
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </Modal>
        </div>
      </header>

      {/*Search bar*/}
      <div className="bg-purple-800 p-4">
        <input
          type="search"
          className="border-gray-400 bg-gray-200  px-2 rounded-lg py-2 w-full outline-0"
          placeholder=" 💭 Search"
        />
      </div>

      {/* Main Content */}
      <main className="px-4 bg-gray-200 pb-20">
        <h1 className="text-center py-3 pb-6">👋 Welcome, back Scholar!!</h1>
        <div className="flex items-center gap-2">
          <Link to="/courses" className="bg-white hover:bg-gray-100 rounded-lg p-4 w-[120px]">
            <p className="text-center">📖</p>
            <p className="text-center text-sm">Study Hub</p>
          </Link>
          <Link to="/market" className="bg-white hover:bg-gray-100 rounded-lg p-4 w-[120px]">
            <p className="text-center">🏦</p>
            <p className="text-center text-sm">Marketplace</p>
          </Link>
          <div className="bg-white hover:bg-gray-100 rounded-lg p-4 w-[120px]">
            <p className="text-center">📄</p>
            <p className="text-center text-sm">Blog</p>
          </div>
        </div>
        {/*Markets*/}
        <div className="flex justify-between items-center pt-6 pb-4">
          <h2 className="font-semibold text-xl">🔥 Hot Deals</h2>
          <Link to="/market" className="text-base hover:underline text-blue-500">see all</Link>
        </div>
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap">
          <div className="rounded-xl shadow-sm p-2 min-w-[130px] overflow-hidden my-2 mx-1 bg-gray-300 transition-transform duration-200 ease-in-out hover:scale-105 hover:rounded-xl">
            <img src={airplane} alt="Airplane" className="w-28 h-24 mx-auto" />
            <p className="font-semibold text-sm">Airplane</p>
            <p className="text-sm font-bold text-green-600">#700.00</p>
          </div>
          <div className="rounded-xl shadow-sm p-2 min-w-[130px] overflow-hidden my-2 mx-1 bg-gray-300 transition-transform duration-200 ease-in-out hover:scale-105 hover:rounded-xl">
            <img src={airplane} alt="Airplane" className="w-28 h-24 mx-auto" />
            <p className="font-semibold text-sm">Airplane</p>
            <p className="text-sm font-bold text-green-600">#700.00</p>
          </div>
          <div className="rounded-xl shadow-sm p-2 min-w-[130px] overflow-hidden my-2 mx-1 bg-gray-300 transition-transform duration-200 ease-in-out hover:scale-105 hover:rounded-xl">
            <img src={airplane} alt="Airplane" className="w-28 h-24 mx-auto" />
            <p className="font-semibold text-sm">Airplane</p>
            <p className="text-sm font-bold text-green-600">#700.00</p>
          </div>
          <div className="rounded-xl shadow-sm p-2 min-w-[130px] overflow-hidden my-2 mx-1 bg-gray-300 transition-transform duration-200 ease-in-out hover:scale-105 hover:rounded-xl">
            <img src={airplane} alt="Airplane" className="w-28 h-24 mx-auto" />
            <p className="font-semibold text-sm">Airplane</p>
            <p className="text-sm font-bold text-green-600">#700.00</p>
          </div>
          <div className="rounded-xl shadow-sm p-2 min-w-[130px] overflow-hidden my-2 mx-1 bg-gray-300 transition-transform duration-200 ease-in-out hover:scale-105 hover:rounded-xl">
            <img src={airplane} alt="Airplane" className="w-28 h-24 mx-auto" />
            <p className="font-semibold text-sm">Airplane</p>
            <p className="text-sm font-bold text-green-600">#700.00</p>
          </div>
        </div>

        {/*School Announcement*/}
        <div className="flex justify-between items-center my-6">
          <h2 className="font-semibold text-lg">📢 School Announcements</h2>
          <Link to="/announcement"><button className="text-base text-blue-500 hover:underline">see all</button></Link>
        </div>
        <div>
          <div className="rounded-xl bg-white p-3 mb-4 shadow-md">
            <h2 className="text-sm font-semibold mb-1">📍 Hostel Lockdown</h2>
            <p className="text-xs text-gray-600">
              All students must return to their hostels by 9PM today. Security
              checks begin at 9:15PM.
            </p>
            <p className="text-[10px] text-gray-600">Apr 1</p>
          </div>
          <div className="rounded-xl bg-white p-3 shadow-md">
            <h2 className="text-sm font-semibold mb-1">📍 Akindeko Ewa Day</h2>
            <p className="text-xs text-gray-600">
              Students at the residence of Akindeko hall, set Mar 2nd for their
              annual ewa day with selling of hostel vest.
            </p>
            <p className="text-[10px] text-gray-600">Apr 23rd</p>
          </div>
        </div>

        {/*Lost and Found*/}
        <div className="flex justify-between items-center my-6">
          <h2 className="font-semibold text-lg">🚫 Lost & Found</h2>
          <Link to="/lostfound"><button className="text-base text-blue-500 hover:underline">see all</button></Link>
        </div>
        <div>
          <div className="rounded-xl bg-white p-3 mb-4 shadow-md">
            <h2 className="text-sm font-semibold text-red-500 uppercase mb-2">
            📍 Missing ID card !!!!
            </h2>
            <p className="text-xs mb-1 text-gray-600">
              The ID card was found at EFT by the staircase, reach out to me on
              09068901679. Thank you
            </p>
            <p className="text-[10px] text-gray-600">Mar 2</p>
          </div>
          <div className="rounded-xl bg-white p-3 mb-4 shadow-md">
            <h2 className="text-sm font-semibold text-red-500 uppercase mb-2">
            📍 Missing Phone !!!!
            </h2>
            <p className="text-xs mb-1 text-gray-600">
              Samsung S21 found at old 1k cap. Reach out to me via whatsapp at
              09042132767 with some tips too. Thank you
            </p>
            <p className="text-[10px] text-gray-600">Mar 2</p>
          </div>
        </div>

        {/*Mindshift*/}
        <div className="flex justify-between items-center my-6">
          <h2 className="font-semibold text-lg">📖 Mindshift</h2>
          <Link to="/mindshift"><button className="text-base text-blue-500 hover:underline">see all</button></Link>
        </div>
        <div>
          <div className="rounded-xl bg-white p-3 mb-4 shadow-md">
            <h3 className="text-sm font-semibold text-purple-500 uppercase mb-2">🔻 What if I Fail ??</h3>
            <p className="text-xs mb-1 text-gray-600">
              Failure is not the end—it's part of the journey. Every expert once
              doubted themselves too, but they kept going. Believe in your
              effort, not just the outcome. You've come this far—don’t stop now.
              You've got more strength than you think. 💪✨
            </p>
          </div>
          <div className="rounded-xl bg-white p-3 mb-10 shadow-md">
            <h3 className="text-sm font-semibold text-purple-500 uppercase mb-2">🔻 I am scared on how to study this course ??</h3>
            <p className="text-xs mb-1 text-gray-600">
              It’s okay to feel scared—starting something new often is. But
              remember, every master once struggled too. Take it one page, one
              concept at a time. You don’t have to know it all today, just
              start. Your effort will turn fear into confidence. 📚✨
            </p>
          </div>
        </div>

        {/*Whatsapp Channel*/}
        <div>
          <div className="rounded-xl bg-white p-3 mb-4 shadow-md">
            <h3 className="text-sm font-semibold text-green-700 uppercase mb-2">📢 For More Info & Updates</h3>
            <p className="text-xs mb-3 text-gray-600">Stay connected-join our official whatsApp group!</p>
            <button className="bg-green-500 rounded-xl text-center text-white py-2 w-full">🔗 Join WhatsApp Group</button>
          </div>
        </div>



      </main>

      {/* Footer */}
      <footer className="bg-purple-600 text-white fixed bottom-0 right-0 left-0">
        <div className="flex justify-around items-center py-5">
          <Link
            to="/home"
            className="flex flex-col font-bold items-center text-[11px]"
          >
            <i className="fas fa-home text-2xl"></i>
            HOME
          </Link>
          <Link
            to="/courses"
            className="flex flex-col font-bold items-center text-[11px]"
          >
            <i className="fas fa-book text-2xl"></i>
            COURSES
          </Link>
          <Link
            to="/pratice-question"
            className="flex flex-col font-bold items-center text-[11px]"
          >
            <i className="fas fa-briefcase text-2xl"></i>
            MOCK CBT
          </Link>
          <Link
            to="/courses"
            className="flex flex-col font-bold items-center text-[11px]"
          >
            <i className="fas fa-book text-2xl"></i>
            BLOGS
          </Link>
          <Link
            to="/market"
            className="flex flex-col font-bold items-center text-[11px]"
          >
            <i className="fas fa-book text-2xl"></i>
            MARKET
          </Link>
          <Link to="/vidLib" className="flex flex-col font-bold items-center text-[11px]">
            <i className="fas fa-briefcase text-2xl"></i>
            VIDEOS
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
