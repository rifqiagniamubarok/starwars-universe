import Axios from "axios";
// import { useSelector as selcetor } from "react-redux";

// const { dataCharOnFilmDetail } = selcetor((state) => state.filmReducer);

export const setDataFilm = () => (dispatch) => {
  Axios.get("https://swapi.dev/api/films")
    .then((result) => {
      const responAPI = result.data.results;
      dispatch({ type: "UPDATE_DATA_FILM", payload: responAPI });
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export const setDataFilmDetail = (id) => (dispatch) => {
  Axios.get(`https://swapi.dev/api/films/${id}`)
    .then((result) => {
      const responAPI = result.data;
      dispatch({ type: "UPDATE_DATA_FILM_DETAIL", payload: responAPI });
      dispatch({
        type: "UPDATE_DATA_CHAR_FILM_DETAIL",
        payload: responAPI.characters,
      });
    })
    .catch((err) => {
      console.log("error", err);
    });
};
