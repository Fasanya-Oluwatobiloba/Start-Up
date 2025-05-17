import { useState } from "react";
import LevelModal from "../../components/LevelModal";
import CourseModal from "../../components/CourseModal";
import QuestionSettingsModal from "../../components/QuestionSettingModal";
import TestPage from "../../components/TestPage";
import questions from "../../util/question.js"; // You can change to .ts if you convert the questions file

// ==== Type Definitions ====
type Question = {
  question: string;
  options: string[];
  answer: string;
};

type Course = {
  code: string;
  title: string;
  questions: Question[];
};

type LevelData = {
  level: string;
  courses: Course[];
};

// ==== Helper Function ====
const getQuestions = (level: string, courseCode: string): Question[] => {
  console.log("Selected Level:", level);
  console.log("Selected Course:", courseCode);

  const levelData: LevelData | undefined = questions.find(
    (item: LevelData) => item.level === level
  );
  console.log("Level Data:", levelData);

  if (levelData) {
    const course = levelData.courses.find((c) => c.code === courseCode);
    console.log("Course Data:", course);
    return course ? course.questions : [];
  }
  return [];
};

// ==== Main Component ====
export default function PracticeQuestion() {
  const [step, setStep] = useState<"level" | "course" | "settings">("level");
  const [level, setLevel] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [numQuestions, setNumQuestions] = useState<number>();
  const [startTest, setStartTest] = useState<boolean>(false);

  const handleStart = () => {
    setStartTest(true);
  };

  const filteredQuestions = getQuestions(level, course)
  .sort(() => Math.random() - 0.5)
  .slice(0, numQuestions);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!startTest ? (
        <>
          {step === "level" && (
            <LevelModal
              onSelect={(val: string) => {
                setLevel(val);
                setStep("course");
              }}
            />
          )}

          {step === "course" && (
            <CourseModal
              level={level}
              courses={
                questions.find((item: LevelData) => item.level === level)
                  ?.courses || []
              }
              onSelect={(val: string) => {
                setCourse(val);
                setStep("settings");
              }}
            />
          )}

          {step === "settings" && (
            <QuestionSettingsModal
              numQuestions={numQuestions}
              setNumQuestions={setNumQuestions}
              onStart={handleStart}
            />
          )}
        </>
      ) : (
        <TestPage questions={filteredQuestions} duration={numQuestions * 30} />
      )}
    </div>
  );
}
