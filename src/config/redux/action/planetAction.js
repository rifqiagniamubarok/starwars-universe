import Axios from "axios";

export const setDataPlanet = (id) => (dispatch) => {
  Axios.get(`https://swapi.dev/api/planets/?page=${id}`)
    .then((result) => {
      const responAPI = result.data.results;
      dispatch({ type: "UPDATE_DATA_PLANET", payload: responAPI });
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export const getJumlahPlanet = () => (dispatch) => {
  Axios.get(`https://swapi.dev/api/planets/?page=1`)
    .then((result) => {
      const responAPI = result.data.count;
      dispatch({
        type: "UPDATE_DATA_JUMLAHPLANET",
        payload: parseInt(responAPI),
      });
      dispatch({
        type: "UPDATE_DATA_TOTALPAGE_PLANET",
        payload: Math.ceil(parseInt(responAPI) / 10),
      });
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export const setDataPlanetDetail = (id) => (dispatch) => {
  Axios.get(`https://swapi.dev/api/planets/${id}`)
    .then((result) => {
      const responAPI = result.data;
      dispatch({ type: "UPDATE_DATA_PLANET_DETAIL", payload: responAPI });
    })
    .catch((err) => {
      console.log("error", err);
    });
};
