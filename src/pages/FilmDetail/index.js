import React from "react";
import { useParams } from "react-router-dom";
import { episode4 } from "../../assets";
import { BackButton, NightMode } from "../../components";

const FilmDetail = (props) => {
  const params = useParams();
  const { nightMode, setNightMode } = props;
  return (
    <div
      className={`${
        nightMode
          ? `bg-primaryDark text-primary`
          : `bg-primary text-primaryDark`
      } h-[1000px] transition-color duration-300 ease-in`}
    >
      <div className="">
        <div>
          <BackButton linkto="/" />
        </div>
        <div>
          <NightMode night={nightMode} setNight={setNightMode} />
        </div>
      </div>
      <div className="grid grid-cols-1">
        <p className="text-center pt-14 text-2xl font-semibold font-serif">
          A little Hope
        </p>
        <img
          src={episode4}
          alt="detail"
          className="h-[400px]  justify-self-center mt-2 rounded"
        />
        <div
          className={`m-4 p-3 border  rounded-md outline-none text-white ${
            nightMode ? `bg-tertiaryDark ` : `bg-tertiary`
          }`}
          d
        >
          <table className="text-left font-medium text-lg  ">
            <tr>
              <td>Title</td>
              <td>A New Hope</td>
            </tr>
            <tr>
              <td>Episode</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Director</td>
              <td>George Lucas</td>
            </tr>
            <tr>
              <td>Producer</td>
              <td>Gary Kurtz, Rick McCallum</td>
            </tr>
            <tr>
              <td>Release Date</td>
              <td>1977-05-25</td>
            </tr>
            <tr>
              <td>Character</td>
              <td>
                samsudin, ente ,samsudin, ente ,samsudin, ente ,samsudin, ente
                ,samsudin, ente ,samsudin, ente ,samsudin, ente ,samsudin, ente
                ,samsudin, ente ,samsudin, ente ,samsudin, ente ,
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
