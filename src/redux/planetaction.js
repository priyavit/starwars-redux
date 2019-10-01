import * as myConst from '../actionConstants';

export const getPlanetDetails = () => {
    return function (dispatch) {
      return fetch("https://swapi.co/api/planets")
        .then(res => res.json())
        .then(json => {
          dispatch({
            type: myConst.user_details,
            payload: json.results
          });
        });
    }
  }