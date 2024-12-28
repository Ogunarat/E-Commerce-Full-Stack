import React, { useEffect, useState } from "react";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import PropTypes from "prop-types";
import Search from "../components/modal/search/Search";
import Dialog from "../components/modal/dialog/Dialog";

const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isDialogShow, setIsDialogShow] = useState(false);

  useEffect(() => {
    const dialogStatus = localStorage.getItem("dialog")
      ? JSON.parse(localStorage.getItem("dialog"))
      : localStorage.setItem("dialog", JSON.stringify(true));

    setTimeout(() => {
      setIsDialogShow(dialogStatus);
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
