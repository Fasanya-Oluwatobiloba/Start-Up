import { useEffect, useState } from "react";
import faculties from "../util/Department.ts"; // Import the array

const CourseList = () => {
  const [department, setDepartment] = useState<string>("");
  const [courses, setCourses] = useState<string[]>([]); // typed as string[]

  useEffect(() => {
    const userDepartment = localStorage.getItem("userDepartment");
    if (userDepartment) {
      setDepartment(userDepartment);

      const faculty = faculties.find((faculty) =>
        faculty.departments.includes(userDepartment)
      );
      setCourses(faculty ? faculty.departments : []);
    } else {
      setDepartment("");
      setCourses([]);
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
