import { Link } from "react-router";
import { useAuth } from "../../stores/Context.js";
import { useEffect, useState, ChangeEvent } from "react";
import { Pencil } from "lucide-react";
import Modal from "../../UI/Modal.js";

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
    <div className="bg-gray-200 min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <header className="flex justify-between items-center px-4 py-3 bg-black text-white">
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

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center py-6 px-4 bg-purple-200">
        <div className="relative mt-4">
          <div className="relative">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-48 h-48 object-cover rounded-full shadow-lg border-2 border-gray-300"
              />
            ) : (
              <div className="w-56 h-56 flex items-center justify-center bg-white border-2 border-purple-500 rounded-full shadow-md text-gray-600">
                No Image
              </div>
            )}

            {profileImage && (
              <label className="absolute bottom-1 right-1 bg-purple-600 text-white p-1 rounded-full shadow-lg cursor-pointer hover:bg-purple-700 transition">
                <Pencil size={16} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>

        {!profileImage && (
          <label className="mt-2 bg-purple-600 text-white px-2 py-1 rounded-full text-sm cursor-pointer hover:bg-purple-700 transition">
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        )}

        <h1 className="text-xl font-serif text-black mt-6">
          <span className="text-blue-600 font-bold">{name || "Guest"}</span>
        </h1>

        <div className="mt-12 text-gray-700 text-xl font-medium">
          <p>
            <span className="text-purple-700 text-2xl">Faculty:</span>{" "}
            {faculty}
          </p>
          <br />
          <p>
            <span className="text-purple-700 text-2xl">Dept:</span>{" "}
            {department}
          </p>
          <br />
          <p>
            <span className="text-purple-700 text-2xl">Level:</span> {level}
          </p>
          <br />
        </div>

        <Link
          to="/courses"
          className="mt-6 px-8 py-3 bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-semibold text-lg rounded-full flex items-center shadow-lg hover:scale-105 transition"
        >
          GET STARTED
        </Link>
      </main>

      {/* Footer */}
      <footer className="bg-purple-600 text-white fixed bottom-0 right-0 left-0">
        <div className="flex justify-around items-center py-5">
          <Link to="/home" className="flex flex-col font-bold items-center text-xs">
            <i className="fas fa-home text-2xl"></i>
            HOME
          </Link>
          <Link to="/courses" className="flex flex-col font-bold items-center text-xs">
            <i className="fas fa-book text-2xl"></i>
            COURSES
          </Link>
          <Link
            to="/pratice-question"
            className="flex flex-col font-bold items-center text-xs"
          >
            <i className="fas fa-briefcase text-2xl"></i>
            MOCK CBT
          </Link>
          <button className="flex flex-col font-bold items-center text-xs">
            <i className="fas fa-briefcase text-2xl"></i>
            OTHERS
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
