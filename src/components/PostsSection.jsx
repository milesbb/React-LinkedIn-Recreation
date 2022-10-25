import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/getPosts";
import Loading from "./Loading";
import PostItem from "./PostItem";
import PostPagination from "./PostPagination";
import Warning from "./Warning";

const PostsSection = () => {
  const [onMyPosts, setOnMyPosts] = useState(false);
  const dispatch = useDispatch();

  const posts = useSelector((state) => {
    return state.loadedPosts.posts;
  });
  const postsLoading = useSelector((state) => {
    return state.loadedPosts.postsLoading;
  });
  const postsError = useSelector((state) => {
    return state.loadedPosts.postsError;
  });

  const currentUser = useSelector((state) => {
    return state.loadedProfiles.currentUser;
  });

  //   const id = useSelector((state) => {
  //     return state.loadedPosts.userId;
  //   });

  const myPosts = useSelector((state) => {
    return state.loadedPosts.myPosts;
  });

  //   console.log("my posts", id, myPosts);
  const lookAtMyPosts = () => {
    setOnMyPosts(!onMyPosts);
  };

  const getPostsData = () => {
    dispatch(getPosts(""));
  };

  useEffect(() => {
    getPostsData();
  }, []);

  
  useEffect(() => {
    if (postsLoading) {
      getPostsData();
    }
  }, [postsLoading]);


  return (
    <div>
      {postsLoading && <Loading />}
      {!postsLoading && postsError && (
        <Warning variant="danger" message="error loading posts" />
      )}
      {!postsLoading &&
        !postsError &&
        posts.length !== 0 &&
        myPosts.length !== 0 &&
        currentUser !== null && (
          <>
            <Button
              variant="secondary"
            //   style={{ background: "none", border: "none" }}
                className={onMyPosts ? "my-2" : ""}
              onClick={lookAtMyPosts}
            >
              {onMyPosts ? "All Posts" : "My Posts"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-post ml-2 my-0"
                viewBox="0 0 16 16"
              >
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                <path d="M4 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7zm0-3a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5z" />
              </svg>
            </Button>
            {onMyPosts ? (
              <>
                {myPosts
                  .filter((elem) => {
                    return elem.user[0]._id === process.env.REACT_APP_MY_ID;
                  })
                  .map((mapElem) => {
                    return (
                      <PostItem
                        key={mapElem._id}
                        post={mapElem}
                        onMyPosts={onMyPosts}
                      />
                    );
                  })}
              </>
            ) : (
              <>
                <PostPagination />
                {posts.map((post) => {
                  return (
                    <PostItem
                      key={post._id}
                      post={post}
                      onMyPosts={onMyPosts}
                    />
                  );
                })}
                <div className="mb-5">

                <PostPagination />
                </div>
              </>
            )}
          </>
        )}
    </div>
  );
};

export default PostsSection;