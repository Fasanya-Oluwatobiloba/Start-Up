// components/CourseModal.tsx
type Course = {
  code: string;
};

type Props = {
  level: string;
  courses?: Course[];
  onSelect: (courseCode: string) => void;
};

export default function CourseModal({ level, courses = [], onSelect }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">
          Select a Course for {level}
        </h2>
        <div className="space-y-3 max-h-60 overflow-y-auto">
          {courses.map((course) => (
            <button
              key={course.code}
              className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              onClick={() => onSelect(course.code)}
            >
              {course.code}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
