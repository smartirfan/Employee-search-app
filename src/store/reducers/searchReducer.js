import {
  FETCH_LATEST_NINJAS_PROFILES_SUCCESS,
  FETCH_LATEST_NINJAS_PROFILES_FAIL,
} from "../actions/types";

let initialState = {
  latestNinjasProfiles: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LATEST_NINJAS_PROFILES_SUCCESS:
      return {
        ...state,
        latestNinjasProfiles: action.payload,
      };
    case FETCH_LATEST_NINJAS_PROFILES_FAIL:
      return {
        ...state,
        latestNinjasProfiles: [],
      };
    default:
      return state;
  }
};
