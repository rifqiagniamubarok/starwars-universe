const inisialStateFilm = {
  dataFilm: [],
  dataFilmDetail: [],
  dataCharOnFilmDetail: [],
  dataCharNameOnFilmDetail: [],
};

const filmReducer = (state = inisialStateFilm, action) => {
  if (action.type === "UPDATE_DATA_FILM") {
    return {
      ...state,
      dataFilm: action.payload,
    };
  }
  if (action.type === "UPDATE_DATA_FILM_DETAIL") {
    return {
      ...state,
      dataFilmDetail: action.payload,
    };
  }
  if (action.type === "UPDATE_DATA_CHAR_FILM_DETAIL") {
    return {
      ...state,
      dataCharOnFilmDetail: action.payload,
    };
  }
  if (action.type === "UPDATE_DATA_CHAR_NAME_FILM_DETAIL") {
    return {
      ...state,
      dataCharNameOnFilmDetail: action.payload,
    };
  }
  return state;
};

export default filmReducer;
