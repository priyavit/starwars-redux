import * as myConst from '../actionConstants';

export const loginUserDetails = () => {
  return function (dispatch) {
    return fetch("https://swapi.co/api/people")
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: myConst.planet_details,
          payload: json.results
        });
      });
  }
}