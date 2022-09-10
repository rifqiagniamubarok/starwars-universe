import React from "react";
import { Link } from "react-router-dom";

const BackButton = (props) => {
  const { linkto } = props;
  return (
    <div className="absolute top-2 left-2 h-[40px] md:hidden">
      <Link to={linkto}>
        <ion-icon name="return-down-back-outline" size="large"></ion-icon>
      </Link>
    </div>
  );
};

export default BackButton;
