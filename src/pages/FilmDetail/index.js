import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { eps1, eps2, eps3, eps4, eps5, eps6 } from "../../assets";
import { BackButton, NightMode } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { setDataFilmDetail } from "../../config/redux/action";

const FilmDetail = (props) => {
  const params = useParams();
  const { nightMode, setNightMode } = props;
  const { dataFilmDetail } = useSelector((state) => state.filmReducer);

  console.log(params.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDataFilmDetail(params.id));
  }, [params.id, dispatch]);

  return (
    <div
      className={`${
        nightMode
          ? `bg-primaryDark text-primary`
          : `bg-primary text-primaryDark`
      } h-[1000px] transition-color duration-300 ease-in`}
    >
      <div className="container px-auto">
        <div className="">
          <div>
            <BackButton linkto="/" />
          </div>
          <div>
            <NightMode night={nightMode} setNight={setNightMode} />
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center">
          <p className="text-center pt-14 text-2xl font-semibold font-serif md:mt-20 md:text-4xl">
            {dataFilmDetail.title}
          </p>
          <p className=" font-semibold text-xl text-center hidden md:inline-block">
            FILM DETAIL :
          </p>
          <img
            src={
              params.id === "1"
                ? eps1
                : params.id === "2"
                ? eps2
                : params.id === "3"
                ? eps3
                : params.id === "4"
                ? eps4
                : params.id === "5"
                ? eps5
                : params.id === "6"
                ? eps6
                : ""
            }
            alt="detail"
            className="h-[400px]  justify-self-center mt-2 rounded"
          />
          <div
            className={`m-4 p-3 border  rounded-md outline-none text-white max-w-[1000px] ${
              nightMode ? `bg-tertiaryDark ` : `bg-tertiary`
            }`}
            d
          >
            <table className="text-left font-medium text-lg  ">
              <tbody>
                <tr>
                  <td className="md:min-w-[220px] lg:min-w-[300px] min-w-[100px]">
                    Title
                  </td>
                  <td>{dataFilmDetail.title}</td>
                </tr>
                <tr>
                  <td>Episode</td>
                  <td>{dataFilmDetail.episode_id}</td>
                </tr>
                <tr>
                  <td>Director</td>
                  <td>{dataFilmDetail.director}</td>
                </tr>
                <tr>
                  <td>Producer</td>
                  <td>{dataFilmDetail.producer}</td>
                </tr>
                <tr>
                  <td>Release Date</td>
                  <td>{dataFilmDetail.release_date}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full grid">
            <Link
              to="/"
              className="text-center hover:underline hover:opacity-60 hidden md:inline-block"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
