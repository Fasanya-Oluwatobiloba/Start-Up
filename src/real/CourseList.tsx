import React, { useEffect, useState } from "react";
import faculties from "../util/Department.js"; // Import the array

const CourseList = () => {
  const [department, setDepartment] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Get department from local storage
    const userDepartment = localStorage.getItem("userDepartment");
    setDepartment(userDepartment);

    if (userDepartment) {
      // Find the faculty containing the department
      const faculty = faculties.find((faculty) =>
        faculty.departments.includes(userDepartment)
      );
      setCourses(faculty ? faculty.departments : []);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {department ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Courses for {department}</h2>
          <ul className="space-y-4">
            {courses.map((course, index) => (
              <li
                key={index}
                className="p-4 border border-gray-300 rounded shadow-sm"
              >
                {course}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-gray-600">No department selected. Please sign up!</p>
      )}
    </div>
  );
};

export default CourseList;
