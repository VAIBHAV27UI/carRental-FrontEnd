import { useState } from "react";
import { BsCameraFill } from "react-icons/bs";

const PhotoViewer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Example gallery
  const images = [
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1015/1000/600/",
    "https://picsum.photos/id/1019/1000/600/"
  ];

  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center bg-black/20 text-white py-2 px-4 rounded-md mb-5 cursor-pointer mr-2"
      >
        <span className="pr-2">
          <BsCameraFill />
        </span>
        View Photos
      </div>

    </div>
  );
};

export default PhotoViewer;
