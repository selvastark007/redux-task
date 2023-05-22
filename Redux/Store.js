import { createStore } from "redux";

const initialState = {
  features: [],
  propSale: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FEATURES":
      return { ...state, features: action.payload };
    case "SET_PROP_SALE":
      return { ...state, propSale: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

export const setFeatures = (features) => ({
    type: "SET_FEATURES",
    payload: features,
  });
  
  export const setPropSale = (propSale) => ({
    type: "SET_PROP_SALE",
    payload: propSale,
  });