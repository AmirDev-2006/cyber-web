import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button
      className={`text-2xl transition-colors duration-300 ${liked ? 'text-red-500' : 'text-gray-500'}`}
      onClick={handleClick}
    >
      <HeartIcon className={`w-6 h-6 transition-colors duration-300 ${liked ? 'text-red-500' : 'text-gray-500'}`}/>
    </button>
  );
};

export default LikeButton;