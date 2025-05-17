import { Link } from "react-router";

type Video = {
  id: number;
  title: string;
  description: string;
  date: string;
  uploadedBy: string;
  videoUrl: string;
};

const videos: Video[] = [
  {
    id: 1,
    title: "Introduction to Mechatronics",
    description: "Basics of Mechatronics Engineering and its applications.",
    date: "2025-05-05",
    uploadedBy: "Toby Fasanya",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video
  },
  {
    id: 2,
    title: "JavaScript for Beginners",
    description: "Learn JavaScript fundamentals in 30 minutes.",
    date: "2025-05-06",
    uploadedBy: "Oluwakemi Johnson",
    videoUrl: "https://www.w3schools.com/html/movie.mp4", // Example video
  },
  {
    id: 3,
    title: "Introduction to Mechatronics",
    description: "Basics of Mechatronics Engineering and its applications.",
    date: "2025-05-05",
    uploadedBy: "Toby Fasanya",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video
  },
  {
    id: 4,
    title: "JavaScript for Beginners",
    description: "Learn JavaScript fundamentals in 30 minutes.",
    date: "2025-05-06",
    uploadedBy: "Oluwakemi Johnson",
    videoUrl: "https://www.w3schools.com/html/movie.mp4", // Example video
  },
  {
    id: 5,
    title: "Introduction to Mechatronics",
    description: "Basics of Mechatronics Engineering and its applications.",
    date: "2025-05-05",
    uploadedBy: "Toby Fasanya",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video
  },
  {
    id: 6,
    title: "JavaScript for Beginners",
    description: "Learn JavaScript fundamentals in 30 minutes.",
    date: "2025-05-06",
    uploadedBy: "Oluwakemi Johnson",
    videoUrl: "https://www.w3schools.com/html/movie.mp4", // Example video
  },
];

const VideoLibrary = () => {


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-between items-center bg-gray-100 px-6 py-4 fixed top-0 left-0 right-0 z-50 shadow-xl">
          <h1 className="text-2xl font-bold text-purple-700">🎥 Video Library</h1>
          <Link to="/addVideo"><button
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
          >
            + Add Video
          </button></Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6  px-4 py-16">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md p-4 space-y-2"
            >
              <video
                controls
                src={video.videoUrl}
                className="w-full rounded-lg"
              ></video>
              <h2 className="text-lg font-semibold text-purple-700">{video.title}</h2>
              <p className="text-gray-600">{video.description}</p>
              <div className="text-sm text-gray-500">
                Added on <strong>{video.date}</strong> by <strong>{video.uploadedBy}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoLibrary;
