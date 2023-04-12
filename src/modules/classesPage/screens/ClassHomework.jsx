import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlus } from "@fortawesome/fontawesome-free-solid";
import classes from "./ClassPeriodicTest.module.css";
import UpdateHomeworkModal from "../components/UpdatePeriodic";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import HomeworkTableRow from "../components/PeriodicTableRow";
import { useEffect } from "react";

const DUMMY_STUDENTS = [
  {
    StudentID: "20521947",
    Name: "Nguyễn Thành Trung",
    ImageURL:
      "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    StudentID: "20521948",
    Name: "Nguyễn Đỗ Nhã Khuyên",
    ImageURL:
      "https://images.pexels.com/photos/3772503/pexels-photo-3772503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    StudentID: "20521949",
    Name: "Nguyễn Công Tấn Phát",
    ImageURL:
      "https://images.pexels.com/photos/234507/pexels-photo-234507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    StudentID: "20521950",
    Name: "Lê Văn Thiện",
    ImageURL:
      "https://images.pexels.com/photos/953125/pexels-photo-953125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    StudentID: "20521951",
    Name: "Đoàn Quốc Bảo",
    ImageURL:
      "https://images.pexels.com/photos/3412360/pexels-photo-3412360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    StudentID: "20521952",
    Name: "Lưu Thượng Vỹ",
    ImageURL:
      "https://images.pexels.com/photos/3616652/pexels-photo-3616652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const DUMMY_TESTS = [
  {
    ID: "test_1",
    Date: new Date(2023, 3, 5),
    Title: "Kiểm tra lần 1",
  },
  {
    ID: "test_2",
    Date: new Date(2023, 3, 8),
    Title: "Kiểm tra lần 2",
  },
  {
    ID: "test_3",
    Date: new Date(2023, 3, 12),
    Title: "Kiểm tra lần 3",
  },
  {
    ID: "test_4",
    Date: new Date(2023, 3, 15),
    Title: "Kiểm tra lần 4",
  },
  {
    ID: "test_5",
    Date: new Date(2023, 3, 18),
    Title: "Kiểm tra lần 5",
  },
  {
    ID: "test_6",
    Date: new Date(2023, 3, 21),
    Title: "Kiểm tra lần 6",
  },
  {
    ID: "test_7",
    Date: new Date(2023, 3, 24),
    Title: "Kiểm tra lần 7",
  },
];

let DUMMY_HOMEWORK_TESTS = [
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521947",
    TestID: "test_1",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521948",
    TestID: "test_1",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521949",
    TestID: "test_1",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521950",
    TestID: "test_1",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521951",
    TestID: "test_1",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521952",
    TestID: "test_1",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521947",
    TestID: "test_2",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521948",
    TestID: "test_2",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521949",
    TestID: "test_2",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521950",
    TestID: "test_2",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521951",
    TestID: "test_2",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521952",
    TestID: "test_2",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521947",
    TestID: "test_3",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521948",
    TestID: "test_3",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521949",
    TestID: "test_3",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521950",
    TestID: "test_3",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521951",
    TestID: "test_3",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521952",
    TestID: "test_3",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521947",
    TestID: "test_4",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521948",
    TestID: "test_4",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521949",
    TestID: "test_4",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521950",
    TestID: "test_4",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521951",
    TestID: "test_4",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521952",
    TestID: "test_4",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521947",
    TestID: "test_5",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521948",
    TestID: "test_5",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521949",
    TestID: "test_5",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521950",
    TestID: "test_5",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521951",
    TestID: "test_5",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521952",
    TestID: "test_5",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521947",
    TestID: "test_6",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521948",
    TestID: "test_6",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521949",
    TestID: "test_6",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521950",
    TestID: "test_6",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521951",
    TestID: "test_6",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521952",
    TestID: "test_6",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521947",
    TestID: "test_7",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521948",
    TestID: "test_7",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521949",
    TestID: "test_7",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521950",
    TestID: "test_7",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521951",
    TestID: "test_7",
  },
  {
    Score: Math.round(Math.random() * 990),
    StudentID: "20521952",
    TestID: "test_7",
  },
];

function ClassHomework() {
  const [tests, setTests] = useState(DUMMY_TESTS);
  const [homeworkTests, setHomeworkTests] = useState(DUMMY_HOMEWORK_TESTS);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isAddingHomework, setIsAddingHomework] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  // Populate foreign Fields of homework tests
  const homeworkTestsPopulated = homeworkTests.map((homework_test) => {
    const student = DUMMY_STUDENTS.find(
      (std) => std.StudentID === homework_test.StudentID
    );
    const test = tests.find((test) => test.ID === homework_test.TestID);
    return {
      Score: homework_test.Score,
      StudentID: student,
      TestID: test,
    };
  });

  const students_test = DUMMY_STUDENTS.map((student) => {
    // test: [{date: ..., scores: ...}]
    let sumScores = 0;
    const perTests = homeworkTestsPopulated
      .filter((homeworkTest) => {
        return homeworkTest.StudentID === student;
      })
      .map((test) => {
        sumScores += test.Score;
        return {
          date: test.TestID.Date,
          score: test.Score,
        };
      });

    return {
      ...student,
      perTests,
      averageScore: Math.round(sumScores / perTests.length),
    };
  });

  const testDates = tests.map(
    (test) => test.Date.getDate() + "/" + test.Date.getMonth()
  );

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

  const saveHomeworkHandler = (date, score) => {
    const newTest = {
      ID: `test_${new Date(date).toISOString()}`,
      Date: new Date(date),
      RequiredScore: score === "" ? null : parseInt(score),
    };
    setTests((prevTests) => [...prevTests, newTest]);
    setIsAddingHomework(false);
    setIsEditable(true);
    setIsUpdating(true);
  };

  const updateHomeworkHandler = (value, studentID, date) => {
    const index = homeworkTestsPopulated.findIndex((homeworkTestPopulated) => {
      return (
        homeworkTestPopulated.StudentID.StudentID === studentID &&
        homeworkTestPopulated.TestID.Date.toString() === date
      );
    });

    const homeworkTestsCopy = [...homeworkTests];
    homeworkTestsCopy[index].Score = parseInt(value);
    setHomeworkTests(homeworkTestsCopy);
  };

  const completeUpdateHandler = () => {
    setIsEditable(false);
    setIsUpdating(false);
  };

  return (
    <Container className="bg-white p-4 rounded-4" style={{borderRadius:"16px", padding: "24px", backgroundColor:"white", marginBottom:"16px",
    boxShadow:"0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)"}}>
      <Row className="align-items-center">
        <Col>
            <p className="mb-1" style={{fontSize:"20px", fontWeight:700}}>Homework Checking</p>
            <p style={{color:"#6B7280", fontSize:"14px"}}>
            Total number of homework test: <span className="fw-bold" style={{color:"black"}}>{DUMMY_TESTS.length}</span>
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
      <Table bordered className={classes.table}
          hover
          style={{
            fontSize: 14,
            borderCollapse: "collapse",
            borderRadius: "1em",
            overflow: "hidden",
            borderColor: "#E5E7EB",
          }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Average</th>
              {testDates.map((date) => (
                <th>{date}</th>
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
            {students_test.map((sdtt) => (
              <HomeworkTableRow
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
          onCloseModal={closeAddHandler}
          onSave={saveHomeworkHandler}
        />
      )}
    </Container>
  );
}

export default ClassHomework;
