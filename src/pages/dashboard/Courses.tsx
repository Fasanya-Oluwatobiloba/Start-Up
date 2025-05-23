import { useState, useEffect } from "react";
import Courses from "../../util/CourseOutine.ts";
import { useAuth } from "../../stores/Context";
import { Link } from "react-router";
import back from "../../assets/back.png";

// ==== Type Definitions ====
type Course = {
  code: string;
  title: string;
  semester: string;
  synopsis: string;
};

type Level = {
  level: string;
  courses: Course[];
};

type Department = {
  name: string;
  levels: Level[];
};

type AuthContextType = {
  department: string | null;
  setDepartment: (value: string) => void;
};

// ==== Component ====
const CoursePage = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>("100 Level");
  const [selectedSemester, setSelectedSemester] = useState<string>("1st Semester");
  const [visibleCourses, setVisibleCourses] = useState<Course[]>([]);
  const [openSynopsisIndex, setOpenSynopsisIndex] = useState<number | null>(null);

  const { department, setDepartment } = useAuth() as AuthContextType;
  const [userCourses, setUserCourses] = useState<Level[] | undefined>();

  // Load stored department on mount
  useEffect(() => {
    const storedDepartment = localStorage.getItem("userDepartment");
    if (storedDepartment) setDepartment(storedDepartment);
  }, [setDepartment]);

  // Load department-specific courses
  useEffect(() => {
    if (department) {
      const deptData = (Courses as Department[]).find(
        (dept) => dept.name === department
      );
      if (deptData) {
        setUserCourses(deptData.levels);
      }
    }
  }, [department]);

  // Load visible courses when level/semester/userCourses changes
  useEffect(() => {
    if (userCourses) {
      loadCourses(selectedLevel, selectedSemester);
    }
  }, [selectedLevel, selectedSemester, userCourses]);

  const loadCourses = (level: string, semester: string) => {
    const levelData = userCourses?.find((lvl) => lvl.level === level);
    if (levelData) {
      const filteredCourses = levelData.courses.filter(
        (course) => course.semester === semester
      );
      setVisibleCourses(filteredCourses);
      setOpenSynopsisIndex(null);
    } else {
      setVisibleCourses([]);
    }
  };

  const toggleSynopsis = (index: number) => {
    setOpenSynopsisIndex(openSynopsisIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-purple-200 shadow-2xl border-4 border-gray-300 w-full min-h-screen">
        <div>
          <div className="flex items-center ml-1">
            <Link to="/home">
              <img
                src={back}
                className="w-8 bg-purple-700 rounded-full p-2 mr-1"
                alt="Back"
              />
            </Link>
            <h1 className="text-3xl italic pt-6 font-bold text-purple-600 mb-6">
              Course Outline
            </h1>
          </div>

          {/* Level Selection Buttons */}
          <div className="flex flex-wrap gap-1 justify-center mb-4">
            {["100 Level", "200 Level", "300 Level", "400 Level", "500 Level"].map(
              (level) => (
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
              )
            )}
          </div>

          {/* Course List */}
          <div className="bg-purple-100 p-4 rounded-2xl shadow-lg">
            {/* Semester Selection */}
            <div className="flex gap-4 mb-4">
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

                  {/* Course Synopsis */}
                  {openSynopsisIndex === index && (
                    <>
                      <p className="mt-2 text-lg text-gray-700 bg-white p-2 font-semibold rounded-lg shadow-inner">
                        {course.title}
                      </p>
                      <p className="mt-2 text-sm text-gray-700 bg-white p-2 rounded-lg shadow-inner">
                        {course.synopsis}
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <button className="border bg-white text-purple-700 text-sm rounded-lg my-5 py-2 px-2 font-bold">
                          <a
                            href="https://drive.google.com/drive/folders/1qPKgObrKPrPgSQ1bdYt21A8YTbNefm2F"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View PDF
                          </a>
                        </button>
                        <button className="border-1 bg-white text-purple-700 text-sm rounded-lg my-5 py-2 px-2 font-bold">
                          <a
                            href="https://drive.google.com/drive/folders/1qPKgObrKPrPgSQ1bdYt21A8YTbNefm2F"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Past Questions
                          </a>
                        </button>
                      </div>
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
