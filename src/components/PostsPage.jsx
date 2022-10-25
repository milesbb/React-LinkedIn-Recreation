import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProfile, ON_MY_PROFILE } from "../redux/actions/getProfileInfo";
import AddPostSection from "./AddPostSection";
import Loading from "./Loading";
import MiniFooter from "./MiniFooter";

import PostsBio from "./PostsBio";
import PostsSection from "./PostsSection";
import SideProfiles from "./SideProfiles";
import Warning from "./Warning";

const PostsPage = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => {
      return state.loadedProfiles.currentUser;
    });
    const profile = useSelector((state) => {
      return state.loadedProfiles.profile;
    });
    const isOnMyProfile = useSelector((state) => {
      return state.loadedProfiles.isOnMyProfile;
    });
    const loading = useSelector((state) => {
      return state.loadedProfiles.loadingProfile;
    });
    const errorOccurred = useSelector((state) => {
      return state.loadedProfiles.errorProfile;
    });
  
    const params = useParams();
  
    const getMyData = async () => {
      await dispatch(getProfile("me"));
    };
  
    const getOtherProfileData = async () => {
      if (currentUser !== null) {
        if (params.userId !== undefined && params.userId !== currentUser._id) {
          await dispatch(getProfile(params.userId));
          dispatch({ type: ON_MY_PROFILE, payload: false });
        } else {
          dispatch({ type: ON_MY_PROFILE, payload: true });
        }
      }
    };
  
    useEffect(() => {
      getMyData();
      if (params.userId !== undefined) {
        getOtherProfileData();
      }
    }, []);
  
    useEffect(() => {
      if (loading) {
        getMyData();
        if (params.userId !== undefined) {
          getOtherProfileData();
        }
      }
    }, [loading]);
  
    useEffect(() => {
      getOtherProfileData();
    }, [params.userId]);
  
    useEffect(() => {
      if (profile !== null) {
        if (params.userId !== undefined) {
          if (params.userId !== profile._id) {
            getOtherProfileData();
          }
        }
      }
    });

  return (
    <div>
        {loading && <Loading />}
        {!loading && errorOccurred && <Warning variant="danger" message="error loading posts" />}
      {!loading && !errorOccurred && (currentUser !== null) && <Container>
        <Row>
          <Col sm={12} md={4} lg={3}>
            <PostsBio />
          </Col>
          <Col sm={12} md={8} lg={6}>
            {/* <div>{currentUser.name}</div> */}
            <AddPostSection />
            
            <hr></hr>
            <PostsSection />
          </Col>
          <Col lg={3} className="d-lg-block d-none">
            <SideProfiles />
            <MiniFooter />
          </Col>
        </Row>
      </Container>}
    </div>
  );
};

export default PostsPage;
