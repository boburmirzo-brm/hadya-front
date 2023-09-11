import React, { useState } from "react";
import "./ZoomImage.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FiX } from "react-icons/fi";

function ZoomImage({ urls, setZoom }) {
  const [index, setIndex] = useState(0);
  return (
    <div className="zoom_image">
      <div onClick={() => setZoom(false)} className="zoom_shadow">
        <FiX title="close" />
      </div>
      <div className="zoom_container">
        <button
          disabled={index === 0}
          onClick={() => setIndex((p) => p - 1)}
          className="zoom_controller"
        >
          <BsChevronLeft title="left" />
        </button>
        <img src={urls[index]} alt="" />
        <button
          disabled={urls.length - 1 <= index}
          onClick={() => setIndex((p) => p + 1)}
          className="zoom_controller"
        >
          <BsChevronRight title="right" />
        </button>
      </div>
    </div>
  );
}

export default ZoomImage;
