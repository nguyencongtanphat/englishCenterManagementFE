import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlus } from "@fortawesome/fontawesome-free-solid";
import classes from "./ClassPeriodicTest.module.css";
import UpdatePeriodicModal from "../components/UpdatePeriodic";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import PeriodicTableRow from "../components/PeriodicTableRow";
import { useEffect } from "react";
import { useParams } from "react-router";
import StudentService, {
  StatisticsService,
  TestsService,
} from "../../../service.js";
import { useSearchParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";

function ClassPeriodicTest() {
  const [tests, setTests] = useState([]);
  const [students, setStudents] = useState([]);
  const [periodicTests, setPeriodicTests] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isAddingPeriodic, setIsAddingPeriodic] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  // const [existingTests, setExistingTests] = useState([]);
  // const [testDates, setTestDates] = useState([]);

  const params = useParams();

  useEffect(() => {
    const { classId } = params;
    TestsService.getPeriodicTests(classId)
      .then((res) => {
        setTests(res.data.ResponseResult.Result);
      })
      .catch((err) => {
        throw err;
      });

    StudentService.getStudentsByClass(classId)
      .then((res) => {
        setStudents(res.data.ResponseResult.Result);
      })
      .catch((err) => {
        throw err;
      });

    StatisticsService.getPeriodicTests(classId)
      .then((res) => {
        setPeriodicTests(res.data.ResponseResult.Result.tests);
        // setExistingTests(res.data.ResponseResult.Result.existingTests);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const studentTest = students.map((student) => {
    let sumScores = 0;
    const periTests = periodicTests
      .filter((periodicTest) => {
        return periodicTest.StudentID._id === student._id;
      })
      .map((periodicTest) => {
        sumScores += periodicTest.Score;
        return {
          date: periodicTest.TestID.Date,
          score: periodicTest.Score,
        };
      });

    return {
      ...student,
      periTests,
      averageScore: Math.round(sumScores / periTests.length),
    };
  });

  let existingTests = [];
  periodicTests.forEach((periodicTest) => {
    if (
      existingTests.findIndex(
        (existingTest) =>
          JSON.stringify(existingTest) === JSON.stringify(periodicTest.TestID)
      ) === -1
    ) {
      existingTests.push(periodicTest.TestID);
    }
  });

  const testDates = existingTests.map((test) => new Date(test.Date));

  const updateHandler = () => {
    setIsUpdating(true);
    setTimeout(() => {
      const newTestCol = document.getElementById("newTestCol");
      newTestCol.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const addHandler = () => {
    setIsAddingPeriodic(true);
  };

  const closeAddHandler = () => {
    setIsAddingPeriodic(false);
  };

  const savePeriodicHandler = (date, testId, score) => {
    let newPeriodicTests = [];
    students.forEach((student) => {
      const newPeriodicTest = {
        Date: new Date(date),
        Score: 0,
        TestID: testId,
        StudentID: student,
        RequiredScore: score === "" ? null : parseInt(score),
      };
      newPeriodicTests.push(newPeriodicTest);
    });
    setPeriodicTests((prevTests) => [...prevTests, ...newPeriodicTests]);
    setIsAddingPeriodic(false);
    setIsEditable(true);
    setIsUpdating(true);
  };

  const updatePeriodicHandler = async (value, studentID, date) => {
    const index = periodicTests.findIndex((periodicTest) => {
      return (
        periodicTest.StudentID.StudentID === studentID &&
        periodicTest.TestID.Date === date
      );
    });

    const periodicTestsCopy = [...periodicTests];
    periodicTestsCopy[index].Score = parseInt(value);
    setPeriodicTests(periodicTestsCopy);
    await StatisticsService.postPeriodicTest(periodicTests)
  };

  const completeUpdateHandler = () => {
    setIsEditable(false);
    setIsUpdating(false);
  };

  return (
    <Container
      className="bg-white p-4 rounded-4"
      style={{
        borderRadius: "16px",
        padding: "24px",
        backgroundColor: "white",
        marginBottom: "16px",
        boxShadow:
          "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Row className="align-items-center">
        <Col>
          <p className="mb-1" style={{ fontSize: "20px", fontWeight: 700 }}>
            Periodic Test Score
          </p>
          <p style={{ color: "#6B7280", fontSize: "14px" }}>
            Total number of periodic tests:{" "}
            <span className="fw-bold" style={{ color: "black" }}>
              {tests.length}
            </span>
          </p>
        </Col>
        <Col className="d-flex justify-content-end">
          {!isUpdating && (
            <button
              onClick={updateHandler}
              className="bg-primary d-flex align-items-center text-light py-2 px-3 rounded-2 text-decoration-none border-0"
            >
              <FontAwesomeIcon icon={faPenToSquare} />
              <span className="ps-2">Update</span>
            </button>
          )}
          {isUpdating && (
            <button
              onClick={completeUpdateHandler}
              className="bg-primary d-flex align-items-center text-light py-2 px-3 rounded-2 text-decoration-none border-0"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span className="ps-2">Save</span>
            </button>
          )}
        </Col>
      </Row>
      <div className={classes["table-div"]} id="tableDiv">
        <Table
          bordered
          className={classes.table}
          hover
          style={{
            fontSize: 14,
            borderCollapse: "collapse",
            borderRadius: "1em",
            overflow: "hidden",
            borderColor: "#E5E7EB",
          }}
        >
          <thead>
            <tr class="text-uppercase text-secondary">
              <th>NAME</th>
              <th>AVERAGE</th>
              {testDates.map((date) => (
                <th key={Math.random()}>
                  {date.getDate() + "/" + date.getMonth()}
                </th>
              ))}
              {isUpdating && (
                <th>
                  <button className="border-0 bg-light" onClick={addHandler}>
                    <FontAwesomeIcon icon={faPlus} color="blue" />
                  </button>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {studentTest.map((sdtt) => (
              <PeriodicTableRow
                key={Math.random()}
                sdtt={sdtt}
                isEditable={isEditable}
                isUpdating={isUpdating}
                onChange={updatePeriodicHandler}
              />
            ))}
          </tbody>
        </Table>
      </div>
      {isAddingPeriodic && (
        <UpdatePeriodicModal
          tests={tests}
          existingTests={existingTests}
          onCloseModal={closeAddHandler}
          onSave={savePeriodicHandler}
        />
      )}
    </Container>
  );
}

export default ClassPeriodicTest;
