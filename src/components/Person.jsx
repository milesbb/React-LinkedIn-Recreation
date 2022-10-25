import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Person = ({ profile, i }) => {
  return (
    <Link
      to={"/users/" + profile._id}
      className="nav-link"
      style={{ color: "black" }}
    >
      <div className="ml-1 mt-3 w-100 text-left d-flex">
        <Image
          style={{ borderRadius: "100rem", width: "60px", height: "60px" }}
          src={profile.image ? profile.image : "https://via.placeholder.com"}
          alt="Profile Pic"
        />
        <div className="ml-3">
          <div className="d-flex">
            <p style={{ fontSize: "0.8rem" }}>
              <strong>{profile.name + " " + profile.surname}</strong>
              <br />
              {profile.title}
            </p>
          </div>

          <Button variant="outline-secondary" style={{ borderRadius: "5rem" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="bi bi-person-plus-fill mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fillRule="evenodd"
                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>{" "}
            <span style={{ fontSize: "0.8rem" }}> Connect </span>
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default Person;
