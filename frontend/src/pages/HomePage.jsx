import React from "react";
import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import Campaigns from "../components/campaigns/Campaigns";
import Blogs from "../components/blogs/Blogs";
import Brands from "../components/brands/Brands";
import CampaignSingle from "../components/campaignSingle/CampaignSingle";

const HomePage = () => {
  return (
    <React.Fragment>
      <Slider />
      <Categories />
      <Products />
      <Campaigns />
      <Blogs />
      <Brands />
      <CampaignSingle />
    </React.Fragment>
  );
};

export default HomePage;
