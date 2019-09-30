export const getPlanetDetails = () => {
    return function (dispatch) {
      return fetch("https://swapi.co/api/planets")
        .then(res => res.json())
        .then(json => {
          dispatch({
            type: 'PLANET_DETAILS',
            payload: json.results
          });
        });
    }
  }