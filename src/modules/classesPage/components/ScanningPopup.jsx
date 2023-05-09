import { Form } from "react-bootstrap";
import classes from "./UpdatePeriodic.module.css";
import ReactDOM from "react-dom";
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

const DUMMY_STUDENT_IDS = ["STD0334", "STD1097", "STD0280"];

const ScanningPopup = ({ onCancelScanning, onSaveScanning }) => {
  const [studentIds, setStudentIds] = useState(DUMMY_STUDENT_IDS);
  const studentIdsString = studentIds.join(" ");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onCancelScanning} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <h3
            style={{
              fontSize: "20px",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            Check in by scanning code
          </h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <span style={{ color: "#1b64f2" }}>Scan codes</span> in student
                cards:
              </Form.Label>
              <Form.Control type="text" value={studentIdsString} readOnly />
            </Form.Group>
            <div className="d-flex gap-2 justify-content-end">
              <button
                className="w-25 py-1 border-0 rounded-2 bg-white text-dark text-opacity-50"
                onClick={onCancelScanning}
              >
                Cancel
              </button>
              <button
                className="w-25 py-1 border-0 rounded-2 bg-black text-white"
                onClick={() => {
                  onSaveScanning(studentIds);
                }}
              >
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

export default ScanningPopup;
