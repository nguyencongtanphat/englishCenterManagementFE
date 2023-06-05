import classes from "./UpdatePeriodic.module.css";
import ReactDOM from "react-dom";
import { Form } from "react-bootstrap";
import { useEffect } from "react";
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

const UpdatePeriodicModal = (props) => {
  const [date, setDate] = useState(new Date());
  const [tests, setTests] = useState(props.existingTests);
  const [testChosen, setTestChosen] = useState(tests ? tests[0] : null);
  const [score, setScore] = useState("");
  const [error, setError] = useState(null);

  const saveHandler = (event) => {
    event.preventDefault();
    if (testChosen === null) {
      setError("You must choose test before save");
    }
    if (!error) {
      props.onSave(date, testChosen, score);
    }
  };

  const dateChangeHandler = (event) => {
    const dateChosen = event.target.value;

    if (new Date(dateChosen).getTime() > new Date().getTime()) {
      setError("Date must be before today!");
    } else {
      const isExist = props.existingTests.find((test) => {
        return (
          new Date(test.Date).toDateString() ===
          new Date(dateChosen).toDateString()
        );
      });
      if (isExist) {
        setError("Date already exist!");
        setTests([]);
      } else {
        const testsOfDate = props.tests.filter((test) => {
          console.log(
            new Date(test.Date).toDateString(),
            new Date(dateChosen).toDateString()
          );
          return (
            new Date(test.Date).toDateString() ===
            new Date(dateChosen).toDateString()
          );
        });
        if (testsOfDate.length === 1) {
          setTestChosen(testsOfDate[0]);
          setError(null);
        }
        if (testsOfDate.length === 0) {
          setTestChosen("");
          setError("No test on this day!");
        }
        setTests(testsOfDate);
      }
    }
    setDate(dateChosen);
  };

  const testChangeHandler = (event) => {
    const _testChosen = tests.find((test) => (test._id = event.target.value));
    setTestChosen(_testChosen);
  };

  const scoreChangeHandler = (event) => {
    if (parseInt(score) <= 0 || parseInt(score) >= 990) {
      setError("Invalid score!");
    } else {
      setScore(event.target.value);
      setError(null);
    }
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCloseModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          {props.tests.length === 0 && (
            <>
              <p>There's no tests in this class</p>
              <div className="d-flex gap-2 justify-content-end">
                <button
                  className="w-25 py-1 border-0 rounded-2 bg-black text-white"
                  onClick={props.onCloseModal}
                >
                  OK
                </button>
              </div>
            </>
          )}
          {props.tests.length > 0 && (
            <>
              <h4 className="text-center">Additional Request</h4>
              {error && <p className="text-danger">{error}</p>}
              <Form className="mt-2">
                <Form.Group className="mb-3">
                  <Form.Label>
                    Pick a date for the periodic test of your class:
                  </Form.Label>
                  <Form.Control
                    required
                    type="date"
                    value={moment(date).format("YYYY-MM-DD")}
                    onChange={dateChangeHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Choose the periodic test:</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={testChangeHandler}
                    value={testChosen?._id}
                    disabled={tests.length === 1}
                  >
                    {tests.map((test) => {
                      return (
                        <option value={test.ID} key={test.ID}>
                          {test.Title +
                            " - " +
                            new Date(test.Date).toDateString()}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Input a required score of this test</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    value={score}
                    onChange={scoreChangeHandler}
                  />
                </Form.Group>
                <div className="d-flex gap-2 justify-content-end">
                  <button
                    className="w-25 py-1 border-0 rounded-2 bg-white text-dark text-opacity-50"
                    onClick={props.onCloseModal}
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
            </>
          )}
        </ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default UpdatePeriodicModal;
