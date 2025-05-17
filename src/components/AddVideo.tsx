import React, { useState } from "react";
import { Pencil } from "lucide-react";
import { Link } from "react-router";

const AddVideo = () => {
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoPreview(videoURL);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4">
        <h2 className="text-center text-xl font-bold text-purple-700 mb-2">
          🎬 Add New Video
        </h2>

        {/* Video Upload Preview */}
        <div className="relative mx-auto h-56 w-full border-2 border-purple-500 bg-gray-100 rounded-md flex items-center justify-center shadow-md">
          {videoPreview ? (
            <video
              controls
              src={videoPreview}
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <span className="text-gray-400">No Video</span>
          )}

          <label className="absolute bottom-2 right-2 bg-purple-600 text-white p-1 rounded-full shadow-lg cursor-pointer hover:bg-purple-700 transition">
            <Pencil size={16} />
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Title */}
        <input
          type="text"
          placeholder="Video Title"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Description */}
        <textarea
          placeholder="Video Description"
          className="w-full border border-gray-300 rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
        ></textarea>

        {/* Date */}
        <input
          type="date"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Buttons */}
        <div className="flex justify-between mt-4">
        <Link to="/VidLab"><button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            Cancel
          </button></Link> 
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVideo;
