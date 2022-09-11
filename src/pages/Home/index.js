import React, { useEffect } from "react";
import { BlogItem } from "../../components/molecules";
import { useSelector, useDispatch } from "react-redux";
import {
  setDataCharNameFilmDetail,
  setDataFilm,
} from "../../config/redux/action";

const Home = (props) => {
  const { nightMode } = props;
  const { dataFilm } = useSelector((state) => state.filmReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataFilm());
  }, [dispatch]);

  return (
    <div className="">
      <div className="w-full p-2 ">
        <p className={`text-center font-semibold text-xl mb-1 mt-5`}>
          FILM LIST
        </p>
        <hr
          className={`mb-4 mx-4 ${
            nightMode ? `border-primary` : `border-primaryDark`
          }`}
        />
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 md:grid-cols-2 lg:grid-cols-3 md:mx-20 md:gap-x-5 md:gap-y-5">
          {dataFilm.map((i, x) => (
            <BlogItem
              key={x.toString()}
              ids={x + 1}
              nightMode={nightMode}
              title={i.title}
              release={i.release_date}
              img={`eps${x + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
