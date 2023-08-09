import React from "react";
import "./Slider.scss";
import leftArrow from "./icons/icon-left.svg";
import rightArrow from "./icons/icon-rigth.svg";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}