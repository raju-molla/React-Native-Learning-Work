import * as actionType from "./actionType";
const initState = {
  pleaseList: [],
};
export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ADD_PLACE:
      return { ...state, pleaseList: state.pleaseList.concat(action.payload) };
    case actionType.DELETE_PLACE:
      return {
        ...state,
        pleaseList: state.pleaseList.filter(
          (place) => place.key !== action.payload
        ),
      };
    default:
      return state;
  }
};
