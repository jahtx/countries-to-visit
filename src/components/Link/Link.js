import React from "react";

const Link = (props) => {
  const country = props.country;
  return (
    <div>
      <div>
        {country.name} ({country.capital})
      </div>
    </div>
  );
};

export default Link;
