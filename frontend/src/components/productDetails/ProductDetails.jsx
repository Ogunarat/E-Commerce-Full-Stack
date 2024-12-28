import Breadcrumb from "./Breadcrumb/Breadcrumb";
import Galery from "./galery/Galery";
import Info from "./info/Info";
import "./ProductDetails.css";
import Tabs from "./tabs/Tabs";
import PropTypes from "prop-types";

const ProductDetails = ({ singleProduct, setsingleProduct }) => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <Breadcrumb />
          <div className="single-content">
            <main className="site-main">
              <Galery singleProduct={singleProduct} />
              <Info singleProduct={singleProduct} />
            </main>
          </div>

          <Tabs
            singleProduct={singleProduct}
            setsingleProduct={setsingleProduct}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  singleProduct: PropTypes.object,
  setsingleProduct: PropTypes.func,
};
