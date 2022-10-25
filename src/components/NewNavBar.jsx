import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Image,
  InputGroup,
} from "react-bootstrap";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchReseult from "./SearchReseult";
import Loading from "./Loading";

const NewNavBar = () => {
  const currentUser = useSelector((state) => {
    return state.loadedProfiles.currentUser;
  });
  const loading = useSelector((state) => {
    return state.loadedProfiles.loadingProfile;
  });
  const errorOccurred = useSelector((state) => {
    return state.loadedProfiles.errorProfile;
  });
  const [query, setQuery] = useState("");
  return (
    <Navbar bg="light" expand="lg" style={{ minHeight: "8vh" }}>
      {loading && <Loading />}
      {!loading && errorOccurred && <div></div>}
      {!loading && !errorOccurred && currentUser !== null && (
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#0a66c2"
              className="mercado-match"
              width="40"
              height="40"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form
              style={{
                borderRadius: 1,
                backgroundColor: "#eef3f8",
                height: "40px",
              }}
              inline
            className="position-"
            >
              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      style={{
                        backgroundColor: "white",
                        height: "40px",
                        border: "0px",
                      }}
                    >
                      <FaSearch />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    style={{ height: "40px", border: "0px" }}
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  {query.length === 0 ? "" : <SearchReseult query={query} />}
                </InputGroup>
              </Form.Group>
            </Form>
            <Nav
              className="ml-auto my-2 my-lg-0 d-flex flex-row justify-content-around"
              style={{ minHeight: "70px" }}
              navbarScroll
            >
              <Nav.Link
                style={{ width: "6vw" }}
                className="mt-2 d-inline-block"
              >
                <div style={{ lineHeight: "0.5rem" }}>
                  <Link to="/" className="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="30px"
                      height="30px"
                      focusable="false"
                    >
                      <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                    </svg>

                    <h6 style={{ fontSize: "12px" }}>Home</h6>
                  </Link>
                </div>
              </Nav.Link>
              <Nav.Link
                style={{ width: "6vw" }}
                className="mt-2 d-inline-block"
              >
                <div style={{ lineHeight: "0.5rem" }}>
                  <Link to="/" className="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z"></path>
                    </svg>
                    <h6 style={{ fontSize: "12px" }}>My Network</h6>
                  </Link>
                </div>
              </Nav.Link>
              <Nav.Link
                style={{ width: "6vw" }}
                className="mt-2 d-inline-block"
              >
                <div style={{ lineHeight: "0.5rem" }}>
                  <Link to="/" className="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M22.84 10.22L21 6h-3.95V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2l2.22 5.18A3 3 0 007 13h14a2 2 0 001.84-2.78zM15.05 6h-6V5a1 1 0 011-1h4a1 1 0 011 1zM7 14h15v3a3 3 0 01-3 3H5a3 3 0 01-3-3V8.54l1.3 3A4 4 0 007 14z"></path>
                    </svg>
                    <h6 style={{ fontSize: "12px" }}>Jobs</h6>
                  </Link>
                </div>
              </Nav.Link>
              <Nav.Link
                style={{ width: "6vw" }}
                className="mt-2 d-inline-block"
              >
                <div style={{ lineHeight: "0.5rem" }}>
                  <Link to="/" className="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                    </svg>
                    <h6 style={{ fontSize: "12px" }}>Messages</h6>
                  </Link>
                </div>
              </Nav.Link>
              <Nav.Link
                style={{ width: "6vw" }}
                className="mt-2 d-inline-block"
              >
                <div style={{ lineHeight: "0.5rem" }}>
                  <Link to="/" className="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M22 19.24a3.46 3.46 0 01-.09.78l-.22 1-6.76-1.51A2.16 2.16 0 0115 20a2 2 0 11-3.53-1.28L2 16.62l.22-1A4.45 4.45 0 014 13.12l1.22-.93 15.46 3.44.7 1.36a5 5 0 01.62 2.25zm-1.49-10.4a6.29 6.29 0 00-4.92-6.69A6.76 6.76 0 0014.18 2a6.29 6.29 0 00-5.9 4.12l-2 5.27 13.8 3.08z"></path>
                    </svg>
                    <h6 style={{ fontSize: "12px" }}>Notifications</h6>
                  </Link>
                </div>
              </Nav.Link>

              <NavDropdown
                style={{ width: "6vw" }}
                className="mt-3 d-inline-block"
                title={
                  <div style={{ lineHeight: "0.6rem" }}>
                    <img
                      style={{
                        borderRadius: 12,
                        width: "24px",
                        height: "24px",
                      }}
                      src={currentUser.image}
                      alt="profile pic"
                    />
                    <div>
                      <span style={{ fontSize: "12px" }}>Me</span>
                    </div>
                  </div>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item
                  className="text-dark p-0 "
                  style={{ PointerEvent: "none"}}
                >
                  <div className="d-flex">
                    <Image
                      className="ml-3 mt-2"
                      style={{
                        borderRadius: 15,
                        width: "30px",
                        height: "30px",
                      }}
                      src={currentUser.image}
                      alt="Profile pic"
                    />
                    <div className="ml-3">
                      <h5
                        style={{
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        {currentUser.name + " " + currentUser.surname}
                      </h5>
                      <h6
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        {currentUser.title}
                      </h6>
                      <h6
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        {currentUser.company}
                      </h6>
                    </div>
                  </div>
                  <Link to="/users/me">
                    <Button
                      variant="primary"
                      className="text-primary bg-white font-weight-bold w-75 ml-4 mt-1"
                      style={{
                        fontSize: "15px",
                        borderRadius: "15px",
                      }}
                    >
                      View profile
                    </Button>
                  </Link>

                  <hr></hr>
                  <div>
                    <ul className="list-unstyled ml-3">
                      <li className="font-weight-bold">Account</li>
                      <li className="text-underline-hover">
                        Try Premium for Free
                      </li>
                      <li className="text-underline-hover">
                        Settings and Privacy
                      </li>
                      <li className="text-underline-hover">Help</li>
                      <li className="text-underline-hover">Language</li>
                    </ul>
                  </div>
                  <hr />
                  <div>
                    <ul className="list-unstyled ml-3">
                      <li className="font-weight-bold">Manage</li>
                      <li className="text-underline-hover">Posts & Activity</li>
                      <li className="text-underline-hover">
                        Job Posting Account
                      </li>
                    </ul>
                  </div>

                  <hr />
                  <div>
                    <ul className="list-unstyled ml-3">
                      <li className="text-underline-hover">Sign Out</li>
                    </ul>
                  </div>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                style={{ width: "6vw" }}
                className="mt-2 d-inline-block"
              >
                <div style={{ lineHeight: "0.6rem" }}>
                  <Link to="/" className="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                    </svg>

                    <h6 style={{ fontSize: "12px" }}>Work</h6>
                  </Link>
                </div>
              </Nav.Link>

              <Nav.Link
                href="#"
                style={{
                  color: "#915907",
                  textDecoration: "underline",
                  fontSize: "12px",
                  width: "6rem",
                }}
                className="text-center mr-5 mt-3 d-inline-block"
              >
                Try Premium for free
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      )}
    </Navbar>
  );
};

export default NewNavBar;
