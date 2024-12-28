import { useState } from "react";
import "./Slider.css";
import SliderItem from "./SliderItem";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <section className="slider">
      <div className="slider-elements">
        {currentSlide === 0 && <SliderItem imageSrc="img/slider/slider1.jpg" />}
        {currentSlide === 1 && <SliderItem imageSrc="img/slider/slider2.jpg" />}
        {currentSlide === 2 && <SliderItem imageSrc="img/slider/slider3.jpg" />}
        <div className="slider-buttons">
          <button>
            <i className="bi bi-chevron-left" onClick={prevSlide}></i>
          </button>
          <button>
            <i className="bi bi-chevron-right" onClick={nextSlide}></i>
          </button>
        </div>
        <div className="slider-dots">
          <button
            onClick={() => setCurrentSlide(0)}
            className={`slider-dot ${currentSlide === 0 ? "active" : ""}`}
          >
            <span></span>
          </button>
          <button
            onClick={() => setCurrentSlide(1)}
            className={`slider-dot ${currentSlide === 1 ? "active" : ""}`}
          >
            <span></span>
          </button>
          <button
            onClick={() => setCurrentSlide(2)}
            className={`slider-dot ${currentSlide === 2 ? "active" : ""}`}
          >
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
