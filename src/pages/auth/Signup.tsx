import { useState } from "react";
import { useNavigate } from "react-router"; // changed from "react-router"
import faculties from "../../util/Department.js";
import { useAuth } from "../../stores/Context.js";
import NavAuth from "../../components/NavAuth.js";

function Signup() {
  const [inputUsername, setInputUsername] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [sign, isSign] = useState(true)
  const levels = [
    "100 Level",
    "200 Level",
    "300 Level",
    "400 Level",
    "500 Level",
  ];

  const { setName, setDepartment, setFaculty, setLevel } = useAuth();
  const navigate = useNavigate();

  const handleFacultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFaculty(e.target.value);
    setSelectedDepartment("");
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputUsername.trim() === "") {
      alert("Please enter a username");
      return;
    }

    if (!selectedDepartment) {
      alert("Please select a department.");
      return;
    }

    // Save user data to context and localStorage
    setName(inputUsername);
    setDepartment(selectedDepartment);
    setFaculty(selectedFaculty);
    setLevel(selectedLevel);

    localStorage.setItem("userName", inputUsername);
    localStorage.setItem("userDepartment", selectedDepartment);
    localStorage.setItem("userFaculty", selectedFaculty);
    localStorage.setItem("userLevel", selectedLevel);

    navigate("/home");
  };

  return (
    <div className="flex transition-all duration-150 items-center justify-center min-h-screen flex-wrap gap-2 dark:bg-[#141414] bg-white">
      <NavAuth call={sign} set={isSign}/>
      <div className="w-full max-w-lg h-auto py-7 sm:px-8 px-4 rounded-lg raleway glass">
        <h2 className="text-2xl font-normal dark:text-white text-indigo-900">
          Create an Account
        </h2>
        <form onSubmit={handleSignup} className="mt-8 space-y-6 dark:text-white text-indigo-800">
          <div>
            <label className="block font-medium">
              Fullname
            </label>
            <input
              name="fullname"
              type="text"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border-2 rounded-md sm:text-sm outline-none merriweather"
            />
          </div>
          <div>
            <label className="block text-base font-medium">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 mt-1 border-2 outline-none rounded-md sm:text-sm merriweather"
            />
          </div>
          <div>
            <label className="block text-base font-medium">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 mt-1 border-2 outline-none rounded-md sm:text-sm merriweather"
            />
          </div>

          {/* Faculty Dropdown */}
          <div className="flex w-full h-auto justify-center items-center gap-10">
            <div className="w-[45%]">
              <label className="block mb-2 text-sm font-medium">Faculty</label>
              <select
                value={selectedFaculty}
                onChange={handleFacultyChange}
                className="w-full p-2 border-2 outline-none dark:text-black rounded-md merriweather"
                required
              >
                <option value="">Select a Faculty</option>
                {faculties.map((faculty) => (
                  <option key={faculty.acronym} className="dark:text-black" value={faculty.acronym}>
                    {faculty.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Department Dropdown */}

          {/* Level Dropdown */}
          <div className="w-[45%]">
            <label className="block mb-2 text-sm font-medium">Level</label>
            <select
              className="w-full p-2 border-2 dark:text-black outline-none rounded-md merriweather"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              required
            >
              <option value="">Select Level</option>
              {levels.map((level, index) => (
                <option key={index} className="dark:text-black" value={level}>
                  {level}
                </option>
              ))}
            </select>
            </div>
            {selectedLevel && (
              <p className="mt-4 text-lg font-semibold text-gray-700">
                You selected:{" "}
                <span className="text-purple-600">{selectedLevel}</span>
              </p>
            )}
          </div>

          {/* Keep me signed in */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="w-4 h-4 text-black border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="block ml-2 font-normal text-lg"
              >
                Keep me signed in on this device
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-normal outline-none border-2 text-white bg-indigo-800 rounded-md shadow-lg shadow-gray-600"
            >
              Sign up
            </button>
          </div>

          {/* Google Image */}
        <div className="w-full h-auto flex justify-center items-center">
          <button className="google-button w-full justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
            <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
            <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
            <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
            <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
          </svg>
            Continue with Google
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
