const inisialStateCharacter = {
  dataCharacter: [],
  dataCharacterDetail: [],
  specielCharacterDetail: "",
  homeworldCharacterDetail: "",
  jumlahCharacter: 0,
  totalPage: 0,
};

const characterReducer = (state = inisialStateCharacter, action) => {
  if (action.type === "UPDATE_DATA_CHARACTER") {
    return {
      ...state,
      dataCharacter: action.payload,
    };
  }
  if (action.type === "UPDATE_DATA_CHARACTER_DETAIL") {
    return {
      ...state,
      dataCharacterDetail: action.payload,
    };
  }
  if (action.type === "UPDATE_DATA_CHARACTER_DETAIL") {
    return {
      ...state,
      dataCharacterDetail: action.payload,
    };
  }
  if (action.type === "UPDATE_SPECIES_CHAR_DETAIL") {
    return {
      ...state,
      specielCharacterDetail: action.payload,
    };
  }
  if (action.type === "UPDATE_HOMEWORLD_CHAR_DETAIL") {
    return {
      ...state,
      homeworldCharacterDetail: action.payload,
    };
  }
  if (action.type === "UPDATE_DATA_TOTALPAGE_CHAR") {
    return {
      ...state,
      totalPage: action.payload,
    };
  }

  return state;
};

export default characterReducer;
