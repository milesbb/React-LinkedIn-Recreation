export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const GET_EXPERIENCES_ERROR = "GET_EXPERIENCES_ERROR";
export const GET_EXPERIENCES_LOADING = "GET_EXPERIENCES_LOADING";
export const GET_SPECIFIC_EXPERIENCE = "GET_SPECIFIC_EXPERIENCE";

// userId mandatory

// if experienceId =
// "" then returns list of experiences to 'experiences'
// an experience ID as string then returns object of specific experience to 'profile'

export const getExperiences = (userId, experienceId) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_EXPERIENCES_LOADING,
        payload: true,
      });
      dispatch({
        type: GET_EXPERIENCES_ERROR,
        payload: false,
      });
      let fetchURL =
        process.env.REACT_APP_CYCLIC_URL + "users/" +
        userId +
        "/experiences/";

      if (experienceId !== "") {
        fetchURL = fetchURL + experienceId;
      }
      console.log(fetchURL);
      let response = await fetch(fetchURL);

      if (response.ok) {
        let experiences = await response.json();
        if (experienceId === "") {
          dispatch({
            type: GET_EXPERIENCES,
            payload: experiences,
          });
        } else {
          dispatch({
            type: GET_SPECIFIC_EXPERIENCE,
            payload: experiences,
          });
        }
      } else {
        console.log("error with initial fetch");
        dispatch({
          type: GET_EXPERIENCES_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log("try catch error:", error);
      dispatch({
        type: GET_EXPERIENCES_ERROR,
        payload: true,
      });
    } finally {
      dispatch({
        type: GET_EXPERIENCES_LOADING,
        payload: false,
      });
    }
  };
};
