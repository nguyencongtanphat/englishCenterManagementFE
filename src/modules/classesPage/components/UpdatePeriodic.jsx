import classes from "./UpdatePeriodic.module.css";
import ReactDOM from "react-dom";
import { Form } from "react-bootstrap";

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
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCloseModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <h4 className="text-center">Additional Request</h4>
          <Form className="mt-4">
            <Form.Group className="mb-4">
              <Form.Label>
                Pick a date for the periodic test of your class:
              </Form.Label>
              <Form.Control required type="date" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Input a required score of this test</Form.Label>
              <Form.Control type="number" min="0" />
            </Form.Group>
            <div className="d-flex gap-2 justify-content-end">
              <button
                className="w-25 py-1 border-0 rounded-2 bg-white text-dark text-opacity-50"
                onClick={props.onCloseModal}
              >
                Cancle
              </button>
              <button className="w-25 py-1 border-0 rounded-2 bg-black text-white">
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
