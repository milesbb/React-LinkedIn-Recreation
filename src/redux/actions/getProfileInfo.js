export const GET_PROFILE_INFO = "GET_PROFILE_INFO";
export const GET_PROFILE_INFO_ERROR = "GET_PROFILE_INFO_ERROR";
export const GET_PROFILE_INFO_LOADING = "GET_PROFILE_INFO_LOADING";
export const GET_PROFILES_LIST = "GET_PROFILES_LIST";
export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const ON_MY_PROFILE = "ON_MY_PROFILE";
export const SET_ID_FOR_POSTS = "SET_ID_FOR_POSTS";
export const GET_UNCUT_PROFILES_LIST = "GET_UNCUT_PROFILES_LIST";

// if userId =
// "" then returns list of profiles to 'profilesList'
// "me" then returns our profile to 'currentUser'
// a user ID as string then returns profile of specific user Id to 'profile'

export const getProfile = (userId) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_PROFILE_INFO_LOADING,
        payload: true,
      });

      let response = await fetch(process.env.REACT_APP_CYCLIC_URL + "users/" + userId);

      if (response.ok) {

      
        let profile = await response.json();

        if (userId === "") {
          let tempArray2 = profile;
          let finalArray2 = tempArray2.slice(0, 300);
          dispatch({ type: GET_UNCUT_PROFILES_LIST, payload: finalArray2 });
          let temArray = profile;

          const randomArrayShuffle = (array) => {
            let currentIndex = array.length,
              temporaryValue,
              randomIndex;
            while (0 !== currentIndex) {
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
            return array;
          };

          let finalArray = randomArrayShuffle(temArray).slice(0, 15);

          dispatch({
            type: GET_PROFILES_LIST,
            payload: finalArray,
          });
        } else if (userId === "me") {
          dispatch({
            type: GET_CURRENT_USER,
            payload: profile,
          });
          //   dispatch({
          //     type: SET_ID_FOR_POSTS,
          //     payload: profile._id
          //   })
        } else {
          dispatch({
            type: GET_PROFILE_INFO,
            payload: profile,
          });
        }
      } else {
        console.log("error with initial fetch");
        dispatch({
          type: GET_PROFILE_INFO_ERROR,
        });
      }
    } catch (error) {
      console.log("try catch error:", error);
      dispatch({
        type: GET_PROFILE_INFO_ERROR,
      });
    } finally {
      dispatch({
        type: GET_PROFILE_INFO_LOADING,
        payload: false,
      });
    }
  };
};
