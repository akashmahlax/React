const ProfilePage = () => {
    const user = { name: "John Doe", email: "john@example.com" };
    const uploadedVideos = [
      { id: 1, title: "My First Video", thumbnail: "https://via.placeholder.com/150" },
      { id: 2, title: "Travel Vlog", thumbnail: "https://via.placeholder.com/150" },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <h2 className="text-xl font-bold mb-4">My Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {uploadedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfilePage;  