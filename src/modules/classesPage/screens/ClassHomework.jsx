import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlus } from "@fortawesome/fontawesome-free-solid";
import classes from "./ClassPeriodicTest.module.css";
import UpdateHomeworkModal from "../components/UpdatePeriodic";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import HomeworkTableRow from "../components/PeriodicTableRow";
import { useEffect } from "react";
import { useParams } from "react-router";
import StudentService, {
  StatisticsService,
  TestsService,
} from "../../../service.js";

function ClassHomework() {
  const [tests, setTests] = useState([]);
  const [students, setStudents] = useState([]);
  const [homeworkTests, setHomeworkTests] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isAddingHomework, setIsAddingHomework] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const params = useParams();

  useEffect(() => {
    const { classId } = params;
    TestsService.getHomework(classId)
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

    StatisticsService.getHomework(classId)
      .then((res) => {
        setHomeworkTests(res.data.ResponseResult.Result);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const studentTest = students.map((student) => {
    let sumScores = 0;
    const periTests = homeworkTests
      .filter((homeworkTest) => {
        return homeworkTest.StudentID._id === student._id;
      })
      .map((homeworkTest) => {
        sumScores += homeworkTest.Score;
        return {
          date: homeworkTest.HomeworkID.Date,
          score: homeworkTest.Score,
        };
      });

    return {
      ...student,
      periTests,
      averageScore: Math.round(sumScores / periTests.length),
    };
  });

  let existingTests = [];
  homeworkTests.forEach((homeworkTest) => {
    if (
      existingTests.findIndex((existingTest) => {
        // console.log(existingTest._id === homeworkTest.HomeworkID._id)
        return existingTest._id === homeworkTest.HomeworkID._id;
      }) === -1
    ) {
      existingTests.push(homeworkTest.HomeworkID);
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
    setIsAddingHomework(true);
  };

  const closeAddHandler = () => {
    setIsAddingHomework(false);
  };

  const saveHomeworkHandler = (date, testId, score) => {
    let newHomeworkTests = [];
    students.forEach((student) => {
      const newHomeworkTest = {
        Date: new Date(date),
        Score: 0,
        HomeworkID: testId,
        StudentID: student,
        RequiredScore: score === "" ? null : parseInt(score),
      };
      newHomeworkTests.push(newHomeworkTest);
    });
    setHomeworkTests((prevTests) => [...prevTests, ...newHomeworkTests]);
    setIsAddingHomework(false);
    setIsEditable(true);
    setIsUpdating(true);
  };

  const updateHomeworkHandler = (value, studentID, date) => {
    const index = homeworkTests.findIndex((homeworkTest) => {
      return (
        homeworkTest.StudentID.StudentID === studentID &&
        homeworkTest.HomeworkID.Date === date
      );
    });

    const homeworkTestsCopy = [...homeworkTests];
    homeworkTestsCopy[index].Score = parseInt(value);
    setHomeworkTests(homeworkTestsCopy);
  };

  const completeUpdateHandler = async () => {
    setIsEditable(false);
    setIsUpdating(false);
    await StatisticsService.postHomeworkTest(homeworkTests);
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
            Homework Tests
          </p>
          <p style={{ color: "#6B7280", fontSize: "14px" }}>
            Total number of homework test:
            <span className="fw-bold" style={{ color: "black" }}>
              {existingTests.length}
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
              <HomeworkTableRow
                key={Math.random()}
                sdtt={sdtt}
                isEditable={isEditable}
                isUpdating={isUpdating}
                onChange={updateHomeworkHandler}
              />
            ))}
          </tbody>
        </Table>
      </div>
      {isAddingHomework && (
        <UpdateHomeworkModal
          tests={tests}
          existingTests={existingTests}
          onCloseModal={closeAddHandler}
          onSave={saveHomeworkHandler}
        />
      )}
    </Container>
  );
}

export default ClassHomework;
