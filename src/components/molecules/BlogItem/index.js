import React from "react";
import { eps1, eps2, eps3, eps4, eps5, eps6 } from "../../../assets";
import { useNavigate } from "react-router-dom";

const BlogItem = (props) => {
  const { nightMode, title, release, ids } = props;

  const navigate = useNavigate();
  const toDetail = (id) => {
    navigate(`/film/${id}`);
  };
  return (
    <div onClick={() => toDetail(ids)}>
      <div
        className={`grid grid-cols-1   p-2 rounded cursor-pointer ${
          nightMode ? `bg-tertiaryDark` : `bg-tertiary`
        } hover:p-1 hover:opacity-80 transition-all duration-300 ease-in`}
      >
        <div className="">
          <img
            src={
              ids === 1
                ? eps1
                : ids === 2
                ? eps2
                : ids === 3
                ? eps3
                : ids === 4
                ? eps4
                : ids === 5
                ? eps5
                : eps6
            }
            alt="poster"
          />
        </div>
        <div className="text-primary">
          <p
            className={`text-xl font-serif text-center mt-2 min-h-[70px] md:text-md`}
          >
            {title}
          </p>
          <p className="text-center">{release}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
