import React from "react";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import CampaignSingle from "../components/campaignSingle/CampaignSingle";

const ShopPage = () => {
  return (
    <React.Fragment>
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
    </React.Fragment>
  );
};

export default ShopPage;
