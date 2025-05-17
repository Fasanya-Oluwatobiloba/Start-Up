// components/TestPage.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import back from "../assets/back.png";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type Props = {
  questions: Question[];
  duration: number;
};

const COLORS = ["#10B981", "#EF4444"];

export default function TestPage({ questions, duration }: Props) {
  const [timeLeft, setTimeLeft] = useState<number>(duration);
  const [answers, setAnswers] = useState<Record<number, string | null>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (submitted || timeLeft <= 0) return;
    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, submitted]);

  useEffect(() => {
    if (timeLeft <= 0 && !submitted) {
      handleSubmit();
    }
  }, [timeLeft, submitted]);

  const handleSelect = (qIndex: number, option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [qIndex]: prev[qIndex] === option ? null : option,
    }));
  };

  const handleSubmit = () => setSubmitted(true);

  const correctCount = questions.filter(
    (q, i) => answers[i] === q.answer
  ).length;

  const incorrectQuestions = questions
    .map((q, i) => ({ ...q, userAnswer: answers[i], index: i }))
    .filter((q) => q.userAnswer !== q.answer);

  const percentage = ((correctCount / questions.length) * 100).toFixed(1);

  const data = [
    { name: "Correct", value: correctCount },
    { name: "Wrong", value: questions.length - correctCount },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-2 bg-purple-200">
      <div className="fixed top-0 left-0 right-0 bg-white border-b shadow z-10 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/home">
            <img
              src={back}
              alt="Go back"
              className="w-8 bg-purple-700 rounded-full p-2 mr-1"
            />
          </Link>
          <h1 className="text-2xl font-bold">Practice Test</h1>
        </div>
        <span className="text-red-600 text-xl font-semibold">
          Time Left: {Math.floor(timeLeft / 60)}:
          {String(timeLeft % 60).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-20 py-4 rounded-xl">
        {!submitted ? (
          <>
            {questions.map((q, i) => (
              <div key={i} className="mb-6 bg-gray-100 rounded-xl py-3 px-3">
                <h2 className="font-medium mb-4 text-base">
                  {i + 1}. {q.question}
                </h2>
                <div className="grid gap-3">
                  {q.options.map((opt, j) => (
                    <button
                      key={j}
                      onClick={() => handleSelect(i, opt)}
                      className={`border px-4 py-2 rounded transition-colors duration-200 text-left ${
                        answers[i] === opt
                          ? "bg-purple-400 text-white"
                          : "bg-gray-200 hover:bg-gray-200"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={handleSubmit}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded"
            >
              Submit
            </button>
          </>
        ) : (
          <div className="text-center ">
            <h2 className="text-2xl font-bold mb-4">Test Completed!</h2>
            <p className="text-lg mb-2">
              You got <span className="font-bold">{correctCount}</span> out of{" "}
              {questions.length} correct.
            </p>
            <p className="text-lg mb-4">Score: {percentage}%</p>

            <div className="flex justify-center">
              <PieChart width={300} height={250}>
                <Pie
                  data={data}
                  cx={150}
                  cy={100}
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {data.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>

            {incorrectQuestions.length > 0 && (
              <div className="mt-10 text-left">
                <h3 className="text-2xl font-bold mb-4 text-red-900">
                  Review Wrong Answers
                </h3>
                {incorrectQuestions.map((q, i) => (
                  <div key={i} className="mb-6 bg-red-50 p-4 rounded-xl">
                    <p className="font-semibold mb-2">
                      {q.index + 1}. {q.question}
                    </p>
                    <p className="mb-1 text-red-900">
                      Your Answer: {q.userAnswer || "No answer"}
                    </p>
                    <p className="text-green-900 font-medium">
                      Correct Answer: {q.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
