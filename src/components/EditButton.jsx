import { useState } from "react";
import { Button } from "react-bootstrap";
import EditExpModal from "./EditExpModal";
import EditModal from "./EditModal";
import WritePostModal from "./WritePostModal";

const EditButton = ({purpose, id, userId, data}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button
        style={{ background: "none", color: "black", border: "none" }}
        onClick={handleShow}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-pencil"
          viewBox="0 0 16 16"
        >
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </svg>
      </Button>
      {purpose === "profile" && <EditModal show={show} handleClose={handleClose} />}
      {purpose === "exp" && <EditExpModal show={show} handleClose={handleClose} id={id} userId={userId} data={data}/>}
      {purpose === "editPost" && <WritePostModal show={show} handleClose={handleClose} data={data} purpose="edit" />}
    </div>
  );
};

export default EditButton;
