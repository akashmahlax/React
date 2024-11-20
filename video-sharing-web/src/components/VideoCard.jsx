import  { useState } from "react";
import { motion } from "framer-motion";
import { FaThumbsUp, FaThumbsDown, FaComment, FaShareAlt, FaDownload } from "react-icons/fa";

const VideoCard = ({ video }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {video.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{video.description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <button onClick={handleLike} className="text-blue-500 hover:text-blue-600">
              <FaThumbsUp /> <span>{likes}</span>
            </button>
            <button onClick={handleDislike} className="text-red-500 hover:text-red-600">
              <FaThumbsDown /> <span>{dislikes}</span>
            </button>
            <button className="text-gray-500 hover:text-gray-600">
              <FaComment />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-green-500 hover:text-green-600">
              <FaDownload />
            </button>
            <button className="text-gray-500 hover:text-gray-600">
              <FaShareAlt />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;