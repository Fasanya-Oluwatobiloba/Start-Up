// components/QuestionSettingsModal.tsx
type Props = {
  numQuestions: number;
  setNumQuestions: (value: number) => void;
  onStart: () => void;
};

export default function QuestionSettingsModal({
  numQuestions,
  setNumQuestions,
  onStart,
}: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Question Settings</h2>
        <label className="block text-gray-700 mb-2">
          Number of Questions (10 to 30)
        </label>
        <input
          type="number"
          min={10}
          max={40}
          value={numQuestions}
          onChange={(e) => setNumQuestions(Number(e.target.value))}
          className="w-full p-2 border rounded mb-4"
        />
        <p className="text-sm text-gray-500 mb-4">
          Timer will be {numQuestions * 10} seconds
        </p>
        <button
          className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          onClick={onStart}
        >
          Start Test
        </button>
      </div>
    </div>
  );
}
