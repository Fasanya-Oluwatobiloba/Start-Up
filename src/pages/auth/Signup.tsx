import { useState } from "react";
import { Link, useNavigate } from "react-router"; // changed from "react-router"
import start from "../../assets/start.png";
import google from "../../assets/google.png";
import faculties from "../../util/Department.js";
import { useAuth } from "../../stores/Context.js";

function Signup() {
  const [inputUsername, setInputUsername] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

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
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg py-10 sm:px-8 px-4 bg-white rounded-lg md:shadow sm:border sm:border-gray-300">
        <img src={start} className="w-20 mb-8" />
        <h2 className="text-2xl font-normal text-gray-900">
          Create an Account
        </h2>
        <p className="text-base mt-8 mb-10 font-normal">
          Have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Sign In
          </Link>
        </p>
        <form onSubmit={handleSignup} className="mt-8 space-y-6">
          <div>
            <label className="block text-base text-black font-medium">
              Enter Fullname
            </label>
            <input
              name="fullname"
              type="text"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border-2 border-black sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-base text-black font-medium">
              Use email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 mt-1 border-2 border-black sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-base text-black font-medium">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 mt-1 border-2 border-black sm:text-sm"
            />
          </div>

          {/* Faculty Dropdown */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Faculty</label>
            <select
              value={selectedFaculty}
              onChange={handleFacultyChange}
              className="w-full p-2 border-2 border-black"
              required
            >
              <option value="">Select a Faculty</option>
              {faculties.map((faculty) => (
                <option key={faculty.acronym} value={faculty.acronym}>
                  {faculty.name}
                </option>
              ))}
            </select>
          </div>

          {/* Department Dropdown */}
          {selectedFaculty && (
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Department
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full p-2 border-2 border-black"
                required
              >
                <option value="">Select a Department</option>
                {faculties
                  .find((faculty) => faculty.acronym === selectedFaculty)
                  ?.departments.map((department, index) => (
                    <option key={index} value={department}>
                      {department}
                    </option>
                  ))}
              </select>
            </div>
          )}

          {/* Level Dropdown */}
          <div>
            <label className="block mb-2 text-sm font-medium">Level</label>
            <select
              className="w-full p-2 border-2 border-black"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              required
            >
              <option value="">Select Level</option>
              {levels.map((level, index) => (
                <option key={index} value={level}>
                  {level}
                </option>
              ))}
            </select>

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
                className="block ml-2 font-normal text-lg text-gray-900"
              >
                Keep me signed in on this device
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-normal text-white bg-black border border-transparent"
            >
              Sign up
            </button>
          </div>

          {/* Google Image */}
          <img src={google} className="w-20 mx-auto my-12" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
