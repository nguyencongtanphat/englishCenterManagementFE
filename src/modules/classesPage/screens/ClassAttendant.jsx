import React, { useState } from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlus } from "@fortawesome/fontawesome-free-solid";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import classes from "./ClassPeriodicTest.module.css";
import UpdateAttendantModal from "../components/UpdateAttendant";
import { useEffect } from "react";
import { useParams } from "react-router";
import StudentService, { StatisticsService } from "../../../service.js";
import AttendanceTableRow from "../components/AttendanceTableRow";
import NoStudent from "../components/NoStudent";
import { faTimes } from "@fortawesome/fontawesome-free-solid";

function ClassAttendant() {
  const [students, setStudents] = useState([]);
  const [attendances, setAttendances] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isAddingAttendant, setIsAddingAttendant] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const params = useParams();
  const { classId } = params;

  useEffect(() => {
    StudentService.getStudentsByClass(classId)
      .then((res) => {
        setStudents(res.data.ResponseResult.Result);
      })
      .catch((err) => {
        throw err;
      });

    StatisticsService.getAttendances(classId)
      .then((res) => {
        setAttendances(res.data.ResponseResult.Result);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  let studentAttendance;
  if (!students) studentAttendance = [];
  else {
    studentAttendance = students.map((student) => {
      let presents = 0;
      if (attendances === null) {
        return {
          ...student,
          attendances: [],
          presents: 0,
        };
      } else {
        const _attendances = attendances
          .filter((attendance) => {
            return attendance.StudentID._id === student._id;
          })
          .map((attendance) => {
            if (attendance.Attendance === true) presents++;
            return {
              date: attendance.Date,
              attendance: attendance.Attendance,
            };
          });

        return {
          ...student,
          attendances: _attendances,
          presents,
        };
      }
    });
  }

  let existingDates = [];
  if (attendances) {
    attendances.forEach((attendance) => {
      if (
        existingDates.findIndex((date) => {
          return (
            new Date(date).getTime() === new Date(attendance.Date).getTime()
          );
        }) === -1
      ) {
        existingDates.push(new Date(attendance.Date));
      }
    });
  }

  const updateHandler = () => {
    setIsUpdating(true);
    setTimeout(() => {
      const newCheckCol = document.getElementById("newAttendanceCol");
      newCheckCol.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const addHandler = () => {
    setIsAddingAttendant(true);
  };

  const closeAddHandler = () => {
    setIsAddingAttendant(false);
  };

  const saveAttendanceHandler = (date) => {
    let newAttandances = [];
    students.forEach((student) => {
      const newAttandance = {
        Date: new Date(date),
        Attendance: false,
        StudentID: student,
      };
      newAttandances.push(newAttandance);
    });
    setAttendances((prevAttendances) => [
      ...prevAttendances,
      ...newAttandances,
    ]);
    setIsAddingAttendant(false);
    setIsEditable(true);
    setIsUpdating(true);
  };

  const updateAttendanceHandler = (value, studentID, date) => {
    const index = attendances.findIndex((attendance) => {
      return (
        attendance.StudentID.StudentID === studentID &&
        new Date(attendance.Date).toDateString() ===
          new Date(date).toDateString()
      );
    });

    const attendancesCopy = [...attendances];
    attendancesCopy[index].Attendance = value;
    setAttendances(attendancesCopy);
  };

  const completeUpdateHandler = async () => {
    setIsEditable(false);
    setIsUpdating(false);
    await StatisticsService.postAttendances(classId, attendances);
  };

  const deleteAttendanceHandler = async (date) => {
    setAttendances((prevAttendances) => {
      return [...prevAttendances].filter((attendance) => {
        return (
          new Date(attendance.Date).toDateString() !==
          new Date(date).toDateString()
        );
      });
    });
    await StatisticsService.deleteAttendance(classId, date);
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
            Attendant Checking
          </p>
          <p style={{ color: "#6B7280", fontSize: "14px" }}>
            Total number of occurred lessons:{" "}
            <span className="fw-bold" style={{ color: "black" }}>
              {existingDates.length}
            </span>
          </p>
        </Col>
        <Col className="d-flex justify-content-end">
          {!isUpdating && (
            <button
              onClick={updateHandler}
              className="bg-primary d-flex align-items-center text-light py-2 px-3 rounded-2 text-decoration-none border-0"
              disabled={students.length === 0}
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

      {students.length > 0 && (
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
                <th style={{ maxWidth: "50px" }}>NAME</th>
                <th>PRESENT</th>
                {existingDates.map((date) => (
                  <th key={Math.random()}>
                    <span style={{ marginRight: "4px" }}>
                      {date.getDate() + "/" + date.getMonth()}
                    </span>
                    {/* Style will be customized later */}
                    {isUpdating && (
                      <button
                        onClick={() => deleteAttendanceHandler(date)}
                        style={{
                          padding: "4px",
                          backgroundColor: "#fff",
                        }}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    )}
                  </th>
                ))}

                {isUpdating && (
                  <th>
                    <button className="border-0 bg-light" onClick={addHandler}>
                      <FontAwesomeIcon icon={faPlus} color="dark" />
                    </button>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {studentAttendance.map((sdta) => (
                <AttendanceTableRow
                  key={Math.random()}
                  sdta={sdta}
                  isEditable={isEditable}
                  isUpdating={isUpdating}
                  onChange={updateAttendanceHandler}
                />
              ))}
            </tbody>
          </Table>
        </div>
      )}

      {students.length === 0 && <NoStudent />}

      {isAddingAttendant && (
        <UpdateAttendantModal
          existingDates={existingDates}
          onCloseModal={closeAddHandler}
          onSave={saveAttendanceHandler}
        />
      )}
    </Container>
  );
}

export default ClassAttendant;
