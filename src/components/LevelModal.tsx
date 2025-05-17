// components/LevelModal.tsx

type Props = {
  onSelect: (level: string) => void;
};

export default function LevelModal({ onSelect }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Select Your Level</h2>
        <div className="space-y-3">
          <button
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => onSelect("100 Level")}
          >
            100 Level
          </button>
          <button
            className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => onSelect("200 Level")}
          >
            200 Level
          </button>
        </div>
      </div>
    </div>
  );
}
