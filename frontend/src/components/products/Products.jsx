import ProductItem from "./ProductItem";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "./Products.css";
import { useEffect, useState } from "react";
import { message } from "antd";

const NextBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="glide__arrow glide__arrow--right">
      <i className="bi bi-chevron-right"></i>
    </button>
  );
};
NextBtn.propTypes = {
  onClick: PropTypes.func,
};
const PrevBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="glide__arrow glide__arrow--left">
      <i className="bi bi-chevron-left"></i>
    </button>
  );
};
PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const url = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${url}/api/products`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri Hatası", error);
      }
    };
    fetchProducts();
  }, [url]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autospeed: 2000,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper product-carousel">
          <div className="glide__track">
            <Slider {...settings}>
              {products.map((product) => (
                <ProductItem product={product} key={product._id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
