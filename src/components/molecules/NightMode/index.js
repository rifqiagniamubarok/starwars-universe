import React from "react";

const NightMode = (props) => {
  //   const [night, setNight] = useState(false);
  const { night, setNight } = props;
  return (
    <div className="flex justify-end md:container md:mx-auto">
      <div
        className={` absolute top-4 md:top-20 md:mr-20 lg:mr-64 mr-4 rounded-full pt-2 px-2 cursor-pointer ${
          night
            ? `bg-secondaryNight  text-primaryDark`
            : `bg-secondary  text-primary`
        } transition duration-300 ease-in`}
        onClick={() => setNight(!night)}
      >
        <ion-icon
          name={night ? "moon-outline" : "sunny-outline"}
          size="large"
          className={`fill-current transition duration-300 ease-in `}
        ></ion-icon>
      </div>
    </div>
  );
};

export default NightMode;
