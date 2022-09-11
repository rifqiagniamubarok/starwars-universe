const inisialStateGlobal = {
  data: [],
};

const globalReducer = (state = inisialStateGlobal, action) => {
  if (action.type === "UPDATE_DATA") {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};

export default globalReducer;
