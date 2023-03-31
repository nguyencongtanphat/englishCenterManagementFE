import classes from "./UpdatePeriodic.module.css";
import ReactDOM from "react-dom";
import { Form } from "react-bootstrap";
import { useRef } from "react";
import { useState } from "react";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const UpdatePeriodicModal = (props) => {
  const dateRef = useRef()
  const scoreRef = useRef()
  const [formIsValid, setFormIsValid] = useState()

  const saveHandler = (event) => {
    event.preventDefault()
    if (dateRef.current.value === '' || scoreRef.current.value === '') {
      setFormIsValid(false)
    } else {
      setFormIsValid(true)
    }
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCloseModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <h4 className="text-center">Additional Request</h4>
          {!formIsValid &&
            <p className="text-danger">Invalid inputs! Try again</p>
          }
          <Form className="mt-2">
            <Form.Group className="mb-3">
              <Form.Label>
                Pick a date for the periodic test of your class:
              </Form.Label>
              <Form.Control required type="date" ref={dateRef}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Input a required score of this test</Form.Label>
              <Form.Control type="number" min="0" ref={scoreRef}/>
            </Form.Group>
            <div className="d-flex gap-2 justify-content-end">
              <button
                className="w-25 py-1 border-0 rounded-2 bg-white text-dark text-opacity-50"
                onClick={props.onCloseModal}
              >
                Cancle
              </button>
              <button className="w-25 py-1 border-0 rounded-2 bg-black text-white" onClick={saveHandler}>
                Save
              </button>
            </div>
          </Form>
        </ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default UpdatePeriodicModal;
