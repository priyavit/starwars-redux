export const loginUserDetails = () => {
  return function (dispatch) {
    return fetch("https://swapi.co/api/people")
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'USER_DETAILS',
          payload: json.results
        });
      });
  }
}