import { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { ListGroupItem } from "react-bootstrap";

const Skills = ({ userId }) => {
  const getSkills = async () => {
    const response = await fetch("http://localhost:3001/skills/" + userId);
    const data = await response.json();
    setSkills(data);
  };

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skills = getSkills();
  }, []);

  return (
    <>
      <div
        style={{
          borderRadius: "10px",
          background: "white",
        }}
        className="mt-5 text-left position-relative p-1"
      >
        <div className="d-flex justify-content-between">
          <div>
            <h2 className="ml-3 my-2">Skills</h2>
          </div>

          <div className="mt-1">
            <ListGroupItem
              className="position-relative"
              style={{ border: "none" }}
            >
              <div className="d-flex">
                <div className="position-absolute" style={{ right: "1.4rem" }}>
                  {
                    <div className="d-flex text-right">
                      <EditButton />
                    </div>
                  }
                </div>
              </div>
              <hr></hr>
            </ListGroupItem>
          </div>
        </div>

        {skills &&
          skills.map((skill) => {
            return (
              <div>
                {/* here comes the map for skills */}
                <h4 className="ml-3 my-2 ">{skill.skillName}</h4>
                <div className="d-flex ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-people-fill mt-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path
                      fill-rule="evenodd"
                      d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                    />
                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                  </svg>
                  <p className="ml-2">Endorsements</p>
                </div>
                <hr />
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Skills;
