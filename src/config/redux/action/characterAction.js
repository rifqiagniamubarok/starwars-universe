import Axios from "axios";

export const setDataCharacter = (id) => (dispatch) => {
  Axios.get(`https://swapi.dev/api/people/?page=${id}`)
    .then((result) => {
      const responAPI = result.data.results;
      dispatch({ type: "UPDATE_DATA_CHARACTER", payload: responAPI });
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export const getJumlahCharacter = () => (dispatch) => {
  Axios.get(`https://swapi.dev/api/people/?page=1`)
    .then((result) => {
      const responAPI = result.data.count;
      dispatch({
        type: "UPDATE_DATA_JUMLAHCHARACTER",
        payload: parseInt(responAPI),
      });
      dispatch({
        type: "UPDATE_DATA_TOTALPAGE_CHAR",
        payload: Math.ceil(parseInt(responAPI) / 10),
      });
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export const setDataCharacterDetail = (id) => (dispatch) => {
  Axios.get(`https://swapi.dev/api/people/${id}`)
    .then((result) => {
      const responAPI = result.data;
      dispatch({ type: "UPDATE_DATA_CHARACTER_DETAIL", payload: responAPI });
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export const getSpeciesCharacterDetail = (id) => (dispatch) => {
  Axios.get(`https://swapi.dev/api/species/${id}`)
    .then((result) => {
      const responAPI = result.data.name;
      dispatch({ type: "UPDATE_SPECIES_CHAR_DETAIL", payload: responAPI });
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export const getHomeworldCharacterDetail = (id) => (dispatch) => {
  Axios.get(`https://swapi.dev/api/planets/${id}`)
    .then((result) => {
      const responAPI = result.data.name;
      dispatch({ type: "UPDATE_HOMEWORLD_CHAR_DETAIL", payload: responAPI });
    })
    .catch((err) => {
      console.log("error", err);
    });
};
