import {
  FETCH_LATEST_NINJAS_PROFILES_FAIL,
  FETCH_LATEST_NINJAS_PROFILES_SUCCESS,
} from "./types";

export const fetchLatestNinjasProfiles = () => async (dispatch) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const res = await fetch("https://api.tretton37.com/ninjas", options);

  if (!res.ok) {
    return dispatch({ type: FETCH_LATEST_NINJAS_PROFILES_FAIL });
  }

  const latestNinjasProfiles = await res.json();

  return dispatch({
    type: FETCH_LATEST_NINJAS_PROFILES_SUCCESS,
    payload: latestNinjasProfiles,
  });
};
