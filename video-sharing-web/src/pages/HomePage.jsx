import VideoCard from "../components/VideoCard";

const HomePage = () => {
  const videos = [
    { id: 1, title: "Sample Video 1", description: "First video", thumbnail: "https://via.placeholder.com/150" },
    { id: 2, title: "Sample Video 2", description: "Second video", thumbnail: "https://via.placeholder.com/150" },
    { id: 3, title: "Sample Video 3", description: "Third video", thumbnail: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-400 mb-6">Trending Videos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;