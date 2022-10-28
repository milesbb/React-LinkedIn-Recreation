import { useSelector } from "react-redux";

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_ERROR = "GET_POSTS_ERROR";
export const GET_POSTS_LOADING = "GET_POSTS_LOADING";
export const GET_SPECIFIC_POST = "GET_SPECIFIC_POST";
export const INCREMENT_POST_PAGINATER = "INCREMENT_POST_PAGINATER";
export const DECREMENT_POST_PAGINATER = "DECREMENT_POST_PAGINATER";
export const GET_MY_POSTS = "GET_MY_POSTS";

// userId mandatory

// if postId =
// "" then returns list of posts to 'posts'
// an post ID as string then returns object of specific post to 'specificPost'

export const getPosts = (postId) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_POSTS_LOADING,
        payload: true,
      });
      dispatch({
        type: GET_POSTS_ERROR,
        payload: false,
      });
      let fetchURL = process.env.REACT_APP_CYCLIC_URL + "posts/";

      if (postId !== "") {
        fetchURL = fetchURL + postId;
      }
      let response = await fetch(fetchURL);

      if (response.ok) {
        let posts = await response.json();
        let reversedPosts = posts.reverse();
        if (postId === "") {
          dispatch({
            type: GET_POSTS,
            payload: [reversedPosts, posts],
          });
        } else {
          dispatch({
            type: GET_SPECIFIC_POST,
            payload: posts,
          });
        }
      } else {
        console.log("error with initial fetch");
        dispatch({
          type: GET_POSTS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log("try catch error:", error);
      dispatch({
        type: GET_POSTS_ERROR,
        payload: true,
      });
    } finally {
      dispatch({
        type: GET_POSTS_LOADING,
        payload: false,
      });
    }
  };
};
