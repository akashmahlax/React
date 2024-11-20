const UploadPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload Video</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Video Title</label>
              <input
                type="text"
                placeholder="Enter video title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Thumbnail URL</label>
              <input
                type="text"
                placeholder="Enter thumbnail URL"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default UploadPage;  