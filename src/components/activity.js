import React, { useState } from "react";
import { Link } from "react-router-dom";

const ActivityCard = ({ url, image, defaultText, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={url}>
      <div
        className="w-60 h-14 rounded-full text-white flex justify-center items-center text-center bg-cover bg-center focus:border-4 focus:border-white"
        style={{ backgroundImage: image }}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`${isHovered ? "text-base" : "text-xl"}`}>
          {isHovered ? hoverText : defaultText}
        </div>
      </div>
    </Link>
  );
};

export default ActivityCard;
