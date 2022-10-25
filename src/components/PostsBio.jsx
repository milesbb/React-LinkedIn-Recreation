import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostsBio = () => {
  const currentUser = useSelector((state) => {
    return state.loadedProfiles.currentUser;
  });

  const backgroundPicObj = {
    background: "gray",
    backgroundImage: "url(" + currentUser.image + ")",
    overflow: "hidden",
    height: "11vh",
    borderRadius: "10px 10px 0 0",
  };
  return (
    <div>
      <div
        style={{
          borderRadius: "10px",
          background: "white",
        }}
        className="mt-5 text-center position-relative"
      >
        <Image
          className="position-absolute"
          style={{
            width: "5rem",
            left: "34%",
            top: "6%",
            background: "white",
            borderRadius: "150rem",
            border: "solid 3px white",
          }}
          src={currentUser.image}
        />
        <div style={backgroundPicObj} className="w-100 mb-5"></div>
        <div className="mt-5 mx-auto d-flex w-75">
          <div className="mx-auto">
            <Link
              to="/users/me"
              className="nav-link"
              style={{ color: "black" }}
            >
              <h2>{currentUser.name + " " + currentUser.surname}</h2>
              <h4>{currentUser.title}</h4>
              <p>{currentUser.area}</p>
            </Link>
          </div>
        </div>
        <hr></hr>
        <div style={{ fontSize: "0.8rem" }} className="text-left ml-3 mb-1">
          <p className="w-100 d-flex justify-content-between mb-0">
            <span>Connections</span>
            <span
              className="mr-3 font-weight-bold"
              style={{ color: "#0b66c2" }}
            >
              82
            </span>
          </p>
          <p className="font-weight-bold">Grow your network</p>
          <p className="w-100 d-flex justify-content-between mb-0">
            <span>Who's viewed your profile</span>
            <span
              className="mr-3  font-weight-bold"
              style={{ color: "#0b66c2" }}
            >
              12
            </span>
          </p>
        </div>
        <hr></hr>
        <div style={{ fontSize: "0.8rem" }} className="text-left ml-3 mb-1">
          <p>Access exclusive tools & insights</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#e7a33e"
              className="bi bi-diamond-half mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.493.493 0 0 1-.35.145V.989z" />
            </svg>
            <a href="" className="font-weight-bold" style={{ color: "black" }}>
              Reactivate Premium
            </a>
          </p>
        </div>
        <hr></hr>
        <div style={{ fontSize: "0.8rem" }} className="text-left ml-3 mb-1">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bookmark-fill mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
            </svg>
            <a href="" className="font-weight-bold" style={{ color: "black" }}>
              My items
            </a>
          </p>
        </div>
        <br></br>
      </div>
      <div
        style={{
          borderRadius: "10px",
          background: "white",
        }}
        className="mt-3 text-center"
      >
        <div
          style={{ fontSize: "0.8rem" }}
          className="text-left ml-3 mb-1 my-2 mt-4"
        >
            <br></br>
          <p>
            <a href="" className="font-weight-bold">
              Groups
            </a>
          </p>
          <p className="w-100 d-flex justify-content-between">
            <span>
              <a href="" className="font-weight-bold">
                Events
              </a>
            </span>
            <span
              className="mr-3  font-weight-bold"
              style={{ color: "#0b66c2" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </span>
          </p>
          <p>
            <a href="" className="font-weight-bold">
              Followed hashtags
            </a>
          </p>
          
        </div>
        <hr></hr>
          <div className="text-center font-weight-bold"><a href="" style={{color: "gray"}}>Discover more</a></div>
          <br></br>
      </div>
    </div>
  );
};

export default PostsBio;
