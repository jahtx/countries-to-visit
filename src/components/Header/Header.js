import React from "react";
import "./header.scss";
import plane from "../../images/basic-plane.png";

const Header = () => {
  return (
    <div className="topArea">
      <div className="container-sm topContainer">
        <h1 className="mainHeader">Make a Postcard</h1>
        <img className="smallPlane" src={plane} alt="plane" />
      </div>
    </div>
  );
};

export default Header;
