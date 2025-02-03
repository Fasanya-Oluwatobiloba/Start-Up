import { useState, useEffect } from "react";
import PMT from "../../util/SLIT.js"; // Import course data
import { Link } from "react-router";

const CoursePage = () => {
  const [selectedLevel, setSelectedLevel] = useState("100 Level");
  const [selectedSemester, setSelectedSemester] = useState("1st Semester");
  const [visibleCourses, setVisibleCourses] = useState([]);
  const [openSynopsisIndex, setOpenSynopsisIndex] = useState(null); // Track which synopsis is open

  useEffect(() => {
    loadCourses(selectedLevel, selectedSemester);
  }, [selectedLevel, selectedSemester]);

  const loadCourses = (level, semester) => {
    const levelData = PMT.find((dept) => dept.level === level);
    if (levelData) {
      const filteredCourses = levelData.courses.filter(
        (course) => course.semester === semester
      );
      setVisibleCourses(filteredCourses);
      setOpenSynopsisIndex(null); // Reset synopsis when switching levels or semesters
    }
  };

  const toggleSynopsis = (index) => {
    setOpenSynopsisIndex(openSynopsisIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-purple-200 shadow-2xl border-4 border-gray-300 max-w-md w-full min-h-screen">
        <Link to="/" className="text-black text-lg p-3">
          Back
        </Link>
        <div className="">
          <h1 className="text-3xl italic p-6 font-bold text-purple-600 mb-4">
            COURSES
          </h1>

          {/* Level Selection Buttons */}
          <div className="flex flex-wrap gap-1 justify-center mb-4">
            {[
              "100 Level",
              "200 Level",
              "300 Level",
              "400 Level",
              "500 Level",
            ].map((level) => (
              <button
                key={level}
                className={`py-2 px-4 rounded-full text-sm font-semibold transition ${
                  selectedLevel === level
                    ? "bg-purple-600 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
                onClick={() => setSelectedLevel(level)}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Courses Display */}
          <div className="bg-purple-100 p-4 rounded-2xl shadow-lg">
            <div className="flex gap-4 mb-4">
              {/* Semester Selection Buttons */}
              {["1st Semester", "2nd Semester"].map((semester) => (
                <button
                  key={semester}
                  className={`py-2 px-4 rounded-full text-sm font-semibold transition ${
                    selectedSemester === semester
                      ? "bg-purple-600 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                  onClick={() => setSelectedSemester(semester)}
                >
                  {semester}
                </button>
              ))}
            </div>

            {/* Courses Display */}
            {visibleCourses.length > 0 ? (
              visibleCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-gray-200 p-3 rounded-lg mb-2 shadow-md"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-purple-700 font-bold">{course.code}</p>
                      <p className="text-sm italic text-gray-600 truncate w-40">
                        {course.title}
                      </p>
                      <p className="text-xs text-gray-500">{course.semester}</p>
                    </div>
                    <button
                      onClick={() => toggleSynopsis(index)}
                      className="bg-white px-4 py-1 rounded-full shadow-md text-purple-700 text-xs font-semibold hover:bg-purple-300 transition"
                    >
                      {openSynopsisIndex === index ? "Hide" : "View"}
                    </button>
                  </div>

                  {/* Course Synopsis (Only One Open at a Time) */}
                  {openSynopsisIndex === index && (
                    <>
                      <p className="mt-2 text-lg text-gray-700 bg-white p-2 font-semibold rounded-lg shadow-inner">
                        {course.title}
                      </p>
                      <p className="mt-2 text-sm text-gray-700 bg-white p-2 rounded-lg shadow-inner">
                        {course.synopsis}
                      </p>
                    </>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 italic">
                No courses available for this semester.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
