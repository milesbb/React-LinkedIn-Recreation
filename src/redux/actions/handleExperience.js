export const HANDLE_EXPERIENCE_SUCCESS = "HANDLE_EXPERIENCE_SUCCESS";
export const HANDLE_EXPERIENCE_LOADING = "HANDLE_EXPERIENCE_LOADING";
export const HANDLE_EXPERIENCE_ERROR = "HANDLE_EXPERIENCE_ERROR";

// userId mandatory

// if experienceId =
// "" then returns list of profiles to 'experiences'
// an experience ID as string then returns object of specific experience to 'profile'

export const handleExperiences = (type, userId, experienceId, data) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: HANDLE_EXPERIENCE_LOADING,
        payload: true,
      });

      dispatch({
        type: HANDLE_EXPERIENCE_ERROR,
        payload: false,
      });

      dispatch({
        type: HANDLE_EXPERIENCE_SUCCESS,
        payload: false,
      });

      let fetchURL =
        "https://striveschool-api.herokuapp.com/api/profile/" +
        userId +
        "/experiences/";

      if (type !== "POST") {
        fetchURL = fetchURL + experienceId;
      }

      const postPutConfig = {
        method: type,
        body: JSON.stringify(data),
        headers: new Headers({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxNjQzOTc2NTM5YzAwMTViNWNkNjkiLCJpYXQiOjE2NjQxODEzMDUsImV4cCI6MTY2NTM5MDkwNX0.KhUolJNoXb0Qw4Ddn9_bNvXY60qoqEiyqDK01VX9OE8",
          "Content-Type": "application/json",
        }),
      };

      const deleteConfig = {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxNjQzOTc2NTM5YzAwMTViNWNkNjkiLCJpYXQiOjE2NjQxODEzMDUsImV4cCI6MTY2NTM5MDkwNX0.KhUolJNoXb0Qw4Ddn9_bNvXY60qoqEiyqDK01VX9OE8",
        },
      };

      const chosenConfig = type === "DELETE" ? deleteConfig : postPutConfig;

      let response = await fetch(fetchURL, chosenConfig);

      if (response.ok) {
        dispatch({
          type: HANDLE_EXPERIENCE_SUCCESS,
          payload: true,
        });
      } else {
        console.log("error with initial fetch");
        dispatch({
          type: HANDLE_EXPERIENCE_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log("try catch error:", error);
      dispatch({
        type: HANDLE_EXPERIENCE_ERROR,
        payload: true,
      });
    } finally {
      dispatch({
        type: HANDLE_EXPERIENCE_LOADING,
        payload: false,
      });
      const errorTimeout = setTimeout(() => {
        dispatch({
          type: HANDLE_EXPERIENCE_ERROR,
          payload: false,
        });
        dispatch({
          type: HANDLE_EXPERIENCE_SUCCESS,
          payload: false,
        });
      }, 3000);
    }
  };
};
