import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getJumlahPlanet,
  setDataPlanet,
} from "../../config/redux/action/planetAction";

const Planet = (props) => {
  const navigate = useNavigate();
  const { nightMode } = props;
  const [page, setPage] = useState(1);
  const { dataPlanet, totalPagePlanet } = useSelector(
    (state) => state.planetReducer
  );
  const dispatch = useDispatch();

  console.log(totalPagePlanet);
  useEffect(() => {
    dispatch(setDataPlanet(page));
    dispatch(getJumlahPlanet(page));
  }, [page, dispatch]);

  const previous = () => {
    setPage(page <= 1 ? 1 : page - 1);
  };

  const next = () => {
    setPage(page === totalPagePlanet ? totalPagePlanet : page + 1);
  };
  return (
    <div>
      <div className="w-full p-2">
        <p className={`text-center font-semibold text-xl mb-1 mt-5`}>
          PLANET LIST
        </p>
        <hr
          className={`mb-4 mx-4 ${
            nightMode ? `border-primary` : `border-primaryDark`
          }`}
        />
      </div>
      <div className="w-full ">
        <div className="mx-3 grid">
          <table className="table-fixed">
            <thead
              className={`${nightMode ? `text-tertiaryDark` : `text-tertiary`}`}
            >
              <tr className="">
                <th className="text-left">Name</th>
                <th className="text-left">Population</th>
                <th className="text-right">Diameter</th>
              </tr>
            </thead>
            <tbody>
              {dataPlanet.map((j, i) => (
                <tr
                  key={i.toString()}
                  className="hover:opacity-60 cursor-pointer"
                  onClick={() => {
                    navigate(`/planet/2`);
                  }}
                >
                  <td className="text-left">{j.name}</td>
                  <td className="text-left">{j.population}</td>
                  <td className="text-right">{j.diameter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 w-full">
          <div className="flex justify-center ">
            <div
              className={`${
                nightMode ? `text-tertiaryDark` : `text-tertiary`
              } cursor-pointer`}
              onClick={previous}
            >
              <ion-icon
                name="chevron-back-circle"
                size="large"
                className="fill-current"
              ></ion-icon>
            </div>
            <div className="text-xl font-medium mx-5">
              {page} / {totalPagePlanet}
            </div>
            <div
              className={`${
                nightMode ? `text-tertiaryDark` : `text-tertiary`
              } cursor-pointer`}
              onClick={next}
            >
              <ion-icon
                name="chevron-forward-circle"
                size="large"
                className="fill-current"
              ></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;
