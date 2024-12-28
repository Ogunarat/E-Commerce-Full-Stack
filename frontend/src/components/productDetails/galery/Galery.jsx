import { useEffect, useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "./Galery.css";

const NextBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="glide__arrow glide__arrow--right"
      data-glide-dir=">"
    >
      <i className="bi bi-chevron-right"></i>
    </button>
  );
};
NextBtn.propTypes = {
  onClick: PropTypes.func,
};
const PrevBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="glide__arrow glide__arrow--left"
      data-glide-dir="<"
    >
      <i className="bi bi-chevron-left"></i>
    </button>
  );
};
PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const Galery = ({ singleProduct }) => {
  const [activeImg, setActiveImg] = useState({
    img: "",
    imgIndex: 0,
  });

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };
  useEffect(() => {
    setActiveImg({ img: singleProduct.img[0], imgIndex: 0 });
  }, [singleProduct.img]);

  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={`${activeImg.img}`} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          <ol className="gallery-thumbs glide__slides">
            <Slider {...settings}>
              {singleProduct.img.map((itemImg, i) => (
                <li
                  onClick={() =>
                    setActiveImg({
                      img: itemImg,
                      imgIndex: i,
                    })
                  }
                  key={i}
                  className="glide__slide glide__slide--active"
                >
                  <img
                    src={`${itemImg}`}
                    alt=""
                    className={`img-fluid ${
                      activeImg === itemImg ? "active" : ""
                    }`}
                  />
                </li>
              ))}
            </Slider>
          </ol>
        </div>
        <div className="glide__arrows" data-glide-el="controls"></div>
      </div>
    </div>
  );
};

export default Galery;

Galery.propTypes = {
  singleProduct: PropTypes.object,
};
