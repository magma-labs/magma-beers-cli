const DEFAULT_STATE = {
  beers: []
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case "SET_BEER_LIST":
      return { ...state, beers: action.beers }
    default:
      return state;
  }
}
