import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BackButton, NightMode } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  setDataCharacterDetail,
  getSpeciesCharacterDetail,
  getHomeworldCharacterDetail,
} from "../../config/redux/action/characterAction";

const CharacterDetail = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const { nightMode, setNightMode } = props;
  const {
    dataCharacterDetail,
    specielCharacterDetail,
    homeworldCharacterDetail,
  } = useSelector((state) => state.characterReducer);

  useEffect(() => {
    dispatch(setDataCharacterDetail(params.id));
    dispatch(getSpeciesCharacterDetail(params.id));
    dispatch(getHomeworldCharacterDetail(params.id));
  }, [params.id, dispatch]);

  return (
    <div
      className={`${
        nightMode
          ? `bg-primaryDark text-primary`
          : `bg-primary text-primaryDark`
      } h-[1000px] transition-color duration-300 ease-in `}
    >
      <div className="container px-auto">
        <div className="">
          <div>
            <BackButton linkto="/character" />
          </div>
          <div>
            <NightMode night={nightMode} setNight={setNightMode} />
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center">
          <p className="text-center pt-14 text-2xl font-semibold font-serif md:mt-20 md:text-4xl">
            {dataCharacterDetail.name}
          </p>
          <p className=" font-semibold text-xl text-center hidden md:inline-block">
            CHARACTER DETAIL :
          </p>
        </div>
        <div className="grid justify-items-center">
          <div
            className={`m-4 p-3 border  rounded-md outline-none text-white ${
              nightMode ? `bg-tertiaryDark ` : `bg-tertiary`
            }`}
            d
          >
            <table className="text-left font-medium text-lg  ">
              <tbody className="w-full">
                <tr className="">
                  <td className="md:min-w-[220px] lg:min-w-[300px] min-w-[100px]">
                    Name
                  </td>
                  <td>{dataCharacterDetail.name}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>{dataCharacterDetail.height}</td>
                </tr>
                <tr>
                  <td>Mass</td>
                  <td>{dataCharacterDetail.mass}</td>
                </tr>
                <tr>
                  <td>Hair Color</td>
                  <td>{dataCharacterDetail.hair_color}</td>
                </tr>
                <tr>
                  <td>Skin Color</td>
                  <td>{dataCharacterDetail.skin_color}</td>
                </tr>
                <tr>
                  <td>Eye Color</td>
                  <td>{dataCharacterDetail.eye_color}</td>
                </tr>
                <tr>
                  <td>Birth Year</td>
                  <td>{dataCharacterDetail.birth_year}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{dataCharacterDetail.gender}</td>
                </tr>
                <tr>
                  <td>Species</td>
                  <td>{specielCharacterDetail}</td>
                </tr>
                <tr>
                  <td>Homeworld</td>
                  <td>{homeworldCharacterDetail}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full grid">
            <Link
              to="/character"
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

export default CharacterDetail;
