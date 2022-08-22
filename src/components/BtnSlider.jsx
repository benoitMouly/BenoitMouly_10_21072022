import React from "react";
import "../styles/components/Slider.css";
import leftArrow from "../assets/chevron-left.svg";
import rightArrow from "../assets/chevron-right.svg";

const BtnSlider = ({ direction, moveSlide })  => {
//   console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}

export default BtnSlider;



