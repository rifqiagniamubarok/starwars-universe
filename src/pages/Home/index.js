import React from "react";
import { BlogItem } from "../../components/molecules";

const Home = (props) => {
  const { nightMode } = props;
  const coba = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];

  return (
    <div className="">
      <div className="w-full p-2">
        <p className={`text-center font-semibold text-xl mb-1 mt-5`}>
          FILM LIST
        </p>
        <hr
          className={`mb-4 mx-4 ${
            nightMode ? `border-primary` : `border-primaryDark`
          }`}
        />
        <div className="grid grid-cols-2 gap-x-2 gap-y-2">
          <BlogItem nightMode={nightMode} linkto="/film/2" />
          <BlogItem nightMode={nightMode} linkto="/film/2" />
          <BlogItem nightMode={nightMode} linkto="/film/2" />
          <BlogItem nightMode={nightMode} linkto="/film/2" />
          <BlogItem nightMode={nightMode} linkto="/film/2" />
          <BlogItem nightMode={nightMode} linkto="/film/2" />
          <BlogItem nightMode={nightMode} linkto="/film/2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
