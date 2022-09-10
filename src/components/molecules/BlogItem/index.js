import React from "react";
import { Link } from "react-router-dom";
import { episode4 } from "../../../assets";

const BlogItem = (props) => {
  const { nightMode, linkto } = props;

  return (
    <div>
      <Link to={linkto}>
        <div
          className={`grid grid-cols-1   p-2 rounded cursor-pointer ${
            nightMode ? `bg-tertiaryDark` : `bg-tertiary`
          } hover:p-1 hover:opacity-80 transition-all duration-300 ease-in`}
        >
          <div className="">
            <img src={episode4} alt="poster" />
          </div>
          <div className="text-primary">
            <p className={`text-xl font-serif text-center mt-2`}>A New Hope</p>
            <p className="text-center">1977-05-25</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
