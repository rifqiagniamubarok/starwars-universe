import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setDataCharacter,
  getJumlahCharacter,
} from "../../config/redux/action/characterAction";

const Character = (props) => {
  const navigate = useNavigate();
  const { nightMode } = props;
  const [page, setPage] = useState(1);
  const { dataCharacter, totalPage } = useSelector(
    (state) => state.characterReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataCharacter(page));
    dispatch(getJumlahCharacter());
  }, [page, dispatch]);

  const previous = () => {
    setPage(page <= 1 ? 1 : page - 1);
  };

  const next = () => {
    setPage(page === totalPage ? totalPage : page + 1);
  };

  const toDetail = (url) => {
    const net1 = url.split("https://swapi.dev/api/people/");
    const net2 = net1[1].split("/");
    const id = net2[0];
    navigate(`/character/${id}`);
  };

  return (
    <div>
      <div className="w-full p-2">
        <p className={`text-center font-semibold text-xl mb-1 mt-5`}>
          CHARACTER LIST
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
              className={`${
                nightMode ? `text-tertiaryDark` : `text-tertiary`
              } `}
            >
              <tr className="">
                <th className="text-left">Name</th>
                <th className="text-left">Skin Color</th>
                <th className="text-right">Gender</th>
              </tr>
            </thead>
            <tbody>
              {dataCharacter.map((j, i) => (
                <tr
                  key={i.toString()}
                  className="hover:opacity-60 cursor-pointer"
                  onClick={() => toDetail(j.url)}
                >
                  <td className="text-left">{j.name}</td>
                  <td className="text-left">{j.skin_color}</td>
                  <td className="text-right">{j.gender}</td>
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
              {page} / {totalPage}
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

export default Character;
