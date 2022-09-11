const inisialStatePlanet = {
  dataPlanet: [],
  jumlahPlanet: 0,
  totalPagePlanet: 0,
  dataPlanetDetail: [],
};

const planetReducer = (state = inisialStatePlanet, action) => {
  if (action.type === "UPDATE_DATA_PLANET") {
    return {
      ...state,
      dataPlanet: action.payload,
    };
  }
  if (action.type === "UPDATE_DATA_JUMLAHPLANET") {
    return {
      ...state,
      jumlahPlanet: action.payload,
    };
  }
  if (action.type === "UPDATE_DATA_TOTALPAGE_PLANET") {
    return {
      ...state,
      totalPagePlanet: action.payload,
    };
  }
  if (action.type === "UPDATE_DATA_PLANET_DETAIL") {
    return {
      ...state,
      dataPlanetDetail: action.payload,
    };
  }

  return state;
};

export default planetReducer;
