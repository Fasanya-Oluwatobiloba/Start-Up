// App.jsx
import React, { useState } from "react";
import LevelModal from "../../components/LevelModal";
import CourseModal from "../../components/CourseModal";
import QuestionSettingsModal from "../../components/QuestionSettingModal";
import TestPage from "../../components/TestPage";
import questions from "../../util/question.js";

// Function to get questions based on level and course code
const getQuestions = (level, courseCode) => {
  console.log("Selected Level:", level);
  console.log("Selected Course:", courseCode);

  const levelData = questions.find((item) => item.level === level);
  console.log("Level Data:", levelData);

  if (levelData) {
    const course = levelData.courses.find(
      (course) => course.code === courseCode
    );
    console.log("Course Data:", course);
    return course ? course.questions : [];
  }
  return [];
};

export default function PraticeQuestion() {
  const [step, setStep] = useState("level");
  const [level, setLevel] = useState("");
  const [course, setCourse] = useState("");
  const [numQuestions, setNumQuestions] = useState(10);
  const [startTest, setStartTest] = useState(false);

  const handleStart = () => {
    setStartTest(true);
  };

  // Use getQuestions to fetch the questions for the selected level and course
  const filteredQuestions = getQuestions(level, course).slice(0, numQuestions);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!startTest ? (
        <>
          {step === "level" && (
            <LevelModal
              onSelect={(val) => {
                setLevel(val);
                setStep("course");
              }}
            />
          )}

          {step === "course" && (
            <CourseModal
              level={level}
              courses={
                questions.find((item) => item.level === level)?.courses || []
              }
              onSelect={(val) => {
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
