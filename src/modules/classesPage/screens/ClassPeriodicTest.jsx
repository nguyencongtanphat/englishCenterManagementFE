import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/fontawesome-free-solid";

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

let DUMMY_PERIODIC_TESTS = [
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

// Populate foreign Fields of periodic tests
DUMMY_PERIODIC_TESTS = DUMMY_PERIODIC_TESTS.map((periodic_test) => {
  const student = DUMMY_STUDENTS.find(
    (std) => std.StudentID === periodic_test.StudentID
  );
  const test = DUMMY_TESTS.find((test) => test.ID === periodic_test.TestID);
  return {
    Score: periodic_test.Score,
    StudentID: student,
    TestID: test,
  };
});

const students_test = DUMMY_STUDENTS.map((student) => {
  // test: [{date: ..., scores: ...}]
  let sumScores = 0;
  const tests = DUMMY_PERIODIC_TESTS.filter((periodic_test) => {
    return periodic_test.StudentID === student;
  }).map((test) => {
    sumScores += test.Score;
    return {
      date: test.TestID.Date,
      score: test.Score,
    };
  });

  return {
    ...student,
    tests,
    averageScore: Math.round(sumScores / tests.length),
  };
});

function ClassPeriodicTest() {
  return (
    <Container className="bg-light p-4 rounded-4">
      <Row className="align-items-center">
        <Col>
          <h3>Periodic Test Score</h3>
          <p>
            Total number of periodic test:{" "}
            <span className="fw-bold">{DUMMY_TESTS.length}</span>
          </p>
        </Col>
        <Col className="text-end">
          <Button className="bg-primary text-light py-2 px-3 rounded-2 text-decoration-none">
            <FontAwesomeIcon icon={faPlusCircle} />
            <span className="ps-2">Update</span>
          </Button>
        </Col>
      </Row>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Average</th>
              <th>5/3</th>
              <th>8/3</th>
              <th>11/3</th>
              <th>14/3</th>
              <th>17/3</th>
              <th>21/3</th>
              <th>24/3</th>
            </tr>
          </thead>
          <tbody>
            {students_test.map((sdtt) => (
              <tr key={sdtt.StudentID}>
                <td className="px-4">
                  <Row className="align-items-center">
                    <div
                      className="col-2"
                      style={{
                        width: "40px",
                        height: "40px",
                        overflow: "hidden",
                        borderRadius: "25px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        style={{
                          height: "100%",
                        }}
                        src={sdtt.ImageURL}
                        alt={sdtt.Name}
                      ></img>
                    </div>
                    <div className="col-10">
                      <p className="mb-1">{sdtt.Name}</p>
                      <p className="mb-0">{sdtt.StudentID}</p>
                    </div>
                  </Row>
                </td>
                <td style={{ verticalAlign: "middle" }}>{sdtt.averageScore}</td>
                {sdtt.tests.map((test) => (
                  <td style={{ verticalAlign: "middle" }}>{test.score}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default ClassPeriodicTest;
