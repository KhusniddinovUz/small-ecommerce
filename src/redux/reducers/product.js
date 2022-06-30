const initialState = 'all'

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "change_product":
      return action.payload
    default:
      return state
  }
}

export default productReducer;