import { Link } from "react-router";

const AddAnnouncement = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4">
        <h2 className="text-center text-xl font-bold text-purple-700 mb-2">
          🛍️ Add New Announcement
        </h2>

        {/* Description */}
        <textarea
          placeholder="Description"
          className="w-full border border-gray-300 rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
        ></textarea>

		<input
          type="date"
          placeholder="date"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Buttons */}
        <div className="flex justify-between mt-4">
        <Link to="/announcement"><button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            Cancel
          </button></Link> 
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAnnouncement
