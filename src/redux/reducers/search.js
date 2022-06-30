const initialState = "";

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "change_search":
      return action.payload
    default:
      return state
  }
};

export default searchReducer;