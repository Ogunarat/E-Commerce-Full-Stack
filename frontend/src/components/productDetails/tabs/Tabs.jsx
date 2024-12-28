import { useState } from "react";
import Reviews from "../../reviews/Reviews";
import PropTypes from "prop-types";
import "./Tabs.css";

const Tabs = ({ singleProduct, setsingleProduct }) => {
  const [activeTab, setActiveTab] = useState("desc");
  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "desc" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "desc")}
          >
            Description
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "info" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "info")}
          >
            Additional information
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "reviews")}
          >
            Reviews
          </a>
        </li>
      </ul>
      <div className="tab-panel">
        <div
          className={`tab-panel-descriptions content ${
            activeTab === "desc" ? "active" : ""
          }`}
          id="desc"
          dangerouslySetInnerHTML={{ __html: singleProduct.description }}
        ></div>
        <div
          className={`tab-panel-descriptions content ${
            activeTab === "info" ? "active" : ""
          }`}
          id="info"
        >
          <h3>Additional information</h3>
          <table>
            <tbody>
              <tr>
                <th>Color</th>
                <td>
                  <p>
                    Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink, Black,
                    White
                  </p>
                </td>
              </tr>
              <tr>
                <th>Size</th>
                <td style={{ display: "flex", gap: "10px" }}>
                  {singleProduct.sizes.map((size, i) => (
                    <p key={i}>
                      {size.toUpperCase()}
                      {i < singleProduct.sizes.length - 1 && ","}
                    </p>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Reviews
          singleProduct={singleProduct}
          setsingleProduct={setsingleProduct}
          active={`tab-panel-descriptions content ${
            activeTab === "reviews" ? "content active" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Tabs;

Tabs.propTypes = {
  singleProduct: PropTypes.object,
  setsingleProduct: PropTypes.func,
};
