import classes from "./UpdatePeriodic.module.css";
import ReactDOM from "react-dom";
import { Form } from "react-bootstrap";
import { useState } from "react";
import moment from "moment/moment";

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

const AddTest = ({ classId, onSave, onCloseModal }) => {
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [goodLevel, setGoodLevel] = useState("");
  const [mediumLevel, setMediumLevel] = useState("");
  const [error, setError] = useState(null);

  const saveHandler = (event) => {
    event.preventDefault();
    const newTest = {
      Title: title,
      Date: date,
      ClassID: classId,
      Type: type,
      GoodLevel: parseFloat(goodLevel),
      MediumLevel: parseFloat(mediumLevel),
    };

    console.log(newTest);
    onSave(newTest);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onCloseModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <h4 className="text-center">Add test to class</h4>
          {error && <p className="text-danger">{error}</p>}
          <Form className="mt-2">
            <Form.Group className="mb-3">
              <Form.Label>Test date</Form.Label>
              <Form.Control
                required
                type="date"
                value={moment(date).format("YYYY-MM-DD")}
                onChange={(event) => setDate(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Good Level Score</Form.Label>
              <Form.Control
                required
                type="number"
                value={goodLevel}
                onChange={(event) => setGoodLevel(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Medium Level Score</Form.Label>
              <Form.Control
                required
                type="number"
                value={mediumLevel}
                onChange={(event) => setMediumLevel(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Select
                defaultValue="Type"
                placeholder="Type"
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                <option hidden>Select Type Class</option>
                <option value="TC01">TOEIC Reading & Listening</option>
                <option value="TC02">TOEIC Writing & Speaking</option>
                <option value="TC03">IELTS</option>
                <option value="TC04">TOEFL</option>
              </Form.Select>
            </Form.Group>
            <div className="d-flex mt-2 gap-2 justify-content-end">
              <button
                className="w-25 py-1 border-0 rounded-2 bg-white text-dark text-opacity-50"
                onClick={onCloseModal}
              >
                Cancle
              </button>
              <button
                className="w-25 py-1 border-0 rounded-2 bg-black text-white"
                onClick={saveHandler}
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

export default AddTest;
