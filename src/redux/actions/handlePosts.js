export const HANDLE_POST_SUCCESS = "HANDLE_POST_SUCCESS";
export const HANDLE_POST_LOADING = "HANDLE_POST_LOADING";
export const HANDLE_POST_ERROR = "HANDLE_POST_ERROR";

// DELETE - type mandatory
// POST, PUT - type, postId, data mandatory

export const handlePosts = (type, postId, data, imgData) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: HANDLE_POST_LOADING,
        payload: true,
      });

      dispatch({
        type: HANDLE_POST_ERROR,
        payload: false,
      });

      dispatch({
        type: HANDLE_POST_SUCCESS,
        payload: false,
      });

      let fetchURL = process.env.REACT_APP_CYCLIC_URL + "posts/";

      if (type !== "POST") {
        fetchURL = fetchURL + postId;
      }

      const postPutConfig = {
        method: type,
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };

      const deleteConfig = {
        method: "DELETE",
      };

      const chosenConfig = type === "DELETE" ? deleteConfig : postPutConfig;

      let response = await fetch(fetchURL, chosenConfig);

      let responseInfo = await response.json();
      console.log(responseInfo);

      const relevantPostId = type === "POST" ? responseInfo._id : postId;

      if (response.ok) {
        if (imgData !== null) {
          let imgResponse = await fetch(
            process.env.REACT_APP_CYCLIC_URL + "posts/" + relevantPostId + "/image",
            {
              method: "POST",
              body: imgData,
            }
          );
        }
        dispatch({
          type: HANDLE_POST_SUCCESS,
          payload: true,
        });
      } else {
        console.log("error with initial fetch");
        dispatch({
          type: HANDLE_POST_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log("try catch error:", error);
      dispatch({
        type: HANDLE_POST_ERROR,
        payload: true,
      });
    } finally {
      dispatch({
        type: HANDLE_POST_LOADING,
        payload: false,
      });
      const errorTimeout = setTimeout(() => {
        dispatch({
          type: HANDLE_POST_ERROR,
          payload: false,
        });
        dispatch({
          type: HANDLE_POST_SUCCESS,
          payload: false,
        });
      }, 3000);
    }
  };
};
