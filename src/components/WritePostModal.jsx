import { useEffect, useState } from "react";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/getPosts";
import { handlePosts } from "../redux/actions/handlePosts";

const WritePostModal = ({ show, handleClose, purpose, postId }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => {
    return state.loadedProfiles.currentUser;
  });

  const [newPost, setNewPost] = useState("");

  const handlePostLoading = useSelector((state) => {
    return state.handlePosts.handlePostLoading;
  });

  const handlePostError = useSelector((state) => {
    return state.handlePosts.handlePostError;
  });

  const handlePostSuccess = useSelector((state) => {
    return state.handlePosts.handlePostSuccess;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const editData = {
      text: newPost,
    };

    console.log(editData);

    const methodString = purpose === "add" ? "POST" : "PUT";

    dispatch(
      handlePosts(methodString, "", editData)
    );

    dispatch(getPosts(""));
    console.log("FORM SUBMITTED");
  };

  useEffect(() => {
    if (handlePostLoading) {
      dispatch(getPosts(""));
    }
  }, [handlePostLoading]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create a post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="w-100">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <div className="d-flex">
                <Image
                  src={currentUser.image}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                  }}
                />
                <div className="ml-2 mt-1" style={{ lineHeight: "0.3rem" }}>
                  <p className="font-weight-bold">
                    {currentUser.name + " " + currentUser.surname}
                  </p>
                  <Button
                    variant="light"
                    style={{
                      borderRadius: "50px",
                      border: "1px solid gray",
                      fontSize: "0.7rem",
                    }}
                  >
                    Anyone
                  </Button>
                </div>
              </div>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="What do you want to talk about?"
              rows={5}
              onChange={(e) => {
                setNewPost(e.target.value);
              }}
              style={{ border: "none" }}
            />
          </Form.Group>
          <Modal.Footer>
            <Button
              variant="secondary"
              style={{ borderRadius: "50px" }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              variant="secondary"
              style={{ borderRadius: "50px" }}
              onClick={handleSubmit}
            >
              Post
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default WritePostModal;
