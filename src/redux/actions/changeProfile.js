export const CHANGE_PROFILE_SUCCESS = "CHANGE_PROFILE";
export const CHANGE_PROFILE_LOADING = "CHANGE_PROFILE_LOADING";
export const CHANGE_PROFILE_ERROR = "CHANGE_PROFILE_ERROR";

export const changeProfile = (data, imgData, userId) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: CHANGE_PROFILE_LOADING,
        payload: true,
      });

      let config = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };

      let response = await fetch(
        process.env.REACT_APP_CYCLIC_URL + "users/" + process.env.REACT_APP_MY_ID,
        config
      );

      if (response.ok) {
        if (imgData !== null) {
          let imgResponse = await fetch(
            process.env.REACT_APP_CYCLIC_URL + "users/" + process.env.REACT_APP_MY_ID + "/image",
            {
              method: "POST",
              body: imgData,
            }
          );
        }
        dispatch({
          type: CHANGE_PROFILE_SUCCESS,
          payload: true,
        });
      } else {
        console.log("error with initial fetch");
        dispatch({
          type: CHANGE_PROFILE_ERROR,
        });
      }
    } catch (error) {
      console.log("try catch error:", error);
      dispatch({
        type: CHANGE_PROFILE_ERROR,
      });
    } finally {
      dispatch({
        type: CHANGE_PROFILE_LOADING,
        payload: false,
      });
    }
  };
};
