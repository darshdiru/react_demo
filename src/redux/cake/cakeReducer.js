import { BUY_CAKE } from "./cakeType";

const initialState = {
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
