import React from "react";

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        {link.name} ({link.weather})
      </div>
    </div>
  );
};

export default Link;
