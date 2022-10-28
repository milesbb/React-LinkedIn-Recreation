import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getExperiences } from "../redux/actions/getExperiences";
import { getProfile, ON_MY_PROFILE } from "../redux/actions/getProfileInfo";
import Bio from "./Bio";

import ExperiencesSection from "./ExperiencesSection";
import Loading from "./Loading";
import ProfileFooter from "./ProfileFooter";
import SideProfiles from "./SideProfiles";
import Skills from "./skills";
import Warning from "./Warning";

//   test /profiles/5fc4ae95b708c200175de88d

const ProfilePage = () => {
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

      {!loading && (errorOccurred || currentUser === null) && (
        <Warning
          variant="danger"
          message="There was an error loading this content"
        />
      )}

      {!loading && !(errorOccurred || currentUser === null) && (
        <Container>
          <Row>
            <Col sm={12} md={8} lg={9}>
              <Bio
                isOnMyProfile={isOnMyProfile}
                profileData={isOnMyProfile ? currentUser : profile}
              />
              {/* <Link to="/profiles/me">back to currentuser</Link>
              <Link to="/">to posts section</Link> */}
              {(profile || currentUser) && (
                <>
                <ExperiencesSection
                  userId={isOnMyProfile ? currentUser._id : profile._id}
                />
                <Skills userId={isOnMyProfile ? currentUser._id : profile._id} />
                </>
              )}

          {/* -------skill section goes here---------     */}
          
          

            </Col>
            <Col sm={12} md={4} lg={3}>
              <SideProfiles />
            </Col>
          </Row>
        </Container>
      )}
      <ProfileFooter />
    </div>
  );
};

export default ProfilePage;
