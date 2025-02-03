import LEVEL_ONE_COURSES from "../util/SOC.js";

const CourseList = () => {
  return (
	<div className="flex justify-center py-10 px-4">
	  <div className="bg-purple-200 rounded-xl lg:max-w-lg md:max-w-md max-w-sm w-full">
		<h1 className="text-4xl rounded-t-xl pl-4 py-4 bg-purple-600 text-white font-bold">
		  100 Level Courses
		</h1>
		<div className="grid gap-6 px-3 py-4">
		  {LEVEL_ONE_COURSES.map((course, index) => (
			<div
			  key={index}
			  className="p-4 border rounded-md bg-purple-50 hover:bg-purple-100 transition-all"
			>
			  <h3 className="text-lg font-bold text-purple-800">
				{course.code}
			  </h3>
			  <p className="text-sm text-gray-900">{course.title}</p>
			  <span className="text-xs text-gray-700 italic">
				{course.semester}
			  </span>
			</div>
		  ))}
		</div>
	  </div>
	</div>
  );
};

export default CourseList;