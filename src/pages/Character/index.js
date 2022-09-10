import React, { useState } from "react";

const Character = (props) => {
  const { nightMode } = props;
  const [page, setPage] = useState(1);
  const coba = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
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
          <table class="table-fixed">
            <thead
              className={`${nightMode ? `text-tertiaryDark` : `text-tertiary`}`}
            >
              <tr className="">
                <th className="text-left">Name</th>
                <th className="text-left">Skin Color</th>
                <th className="text-right">Gender</th>
              </tr>
            </thead>
            <tbody>
              {coba.map((j) => (
                <tr className="hover:opacity-60 cursor-pointer">
                  <td className="text-left">luke</td>
                  <td className="text-left">grey</td>
                  <td className="text-right">Male</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 w-full">
          <div className="flex justify-center ">
            <div
              className={`${nightMode ? `text-tertiaryDark` : `text-tertiary`}`}
              onClick={() => setPage(page - 1)}
            >
              <ion-icon
                name="chevron-back-circle"
                size="large"
                className="fill-current"
              ></ion-icon>
            </div>
            <div className="text-xl font-medium mx-5">{page}</div>
            <div
              className={`${nightMode ? `text-tertiaryDark` : `text-tertiary`}`}
              onClick={() => setPage(page + 1)}
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
