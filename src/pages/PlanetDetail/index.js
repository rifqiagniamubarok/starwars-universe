import React, { useEffect } from "react";
import { BackButton, NightMode } from "../../components";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDataPlanetDetail } from "../../config/redux/action/planetAction";

const PlanetDetail = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const { nightMode, setNightMode } = props;
  const { dataPlanetDetail } = useSelector((state) => state.planetReducer);

  useEffect(() => {
    dispatch(setDataPlanetDetail(params.id));
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
            <BackButton linkto="/character" />
          </div>
          <div>
            <NightMode night={nightMode} setNight={setNightMode} />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <p className="text-center pt-14 text-2xl font-semibold font-serif md:mt-20 md:text-4xl">
            {dataPlanetDetail.name}
          </p>
          <p className=" font-semibold text-xl text-center hidden md:inline-block">
            PLANET DETAIL :
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
              <tbody>
                <tr>
                  <td className="md:min-w-[220px] lg:min-w-[300px] min-w-[100px]">
                    Name
                  </td>
                  <td>{dataPlanetDetail.name}</td>
                </tr>
                <tr>
                  <td>Population</td>
                  <td>{dataPlanetDetail.population}</td>
                </tr>
                <tr>
                  <td>diameter</td>
                  <td>{dataPlanetDetail.diameter}</td>
                </tr>
                <tr>
                  <td>Climate</td>
                  <td>{dataPlanetDetail.climate}</td>
                </tr>

                <tr>
                  <td>terrain</td>
                  <td>{dataPlanetDetail.terrain}</td>
                </tr>
                <tr>
                  <td>Rotation Period</td>
                  <td>{dataPlanetDetail.rotation_period}</td>
                </tr>
                <tr>
                  <td>Orbital Period</td>
                  <td>{dataPlanetDetail.orbital_period}</td>
                </tr>
                <tr>
                  <td>Surface Water</td>
                  <td>{dataPlanetDetail.surface_water}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full grid">
            <Link
              to="/planet"
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

export default PlanetDetail;
