import React from "react";

const Planet = (props) => {
  const { nightMode } = props;
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
    </div>
  );
};

export default Planet;
