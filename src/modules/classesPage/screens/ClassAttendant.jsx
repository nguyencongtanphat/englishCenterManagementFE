import  React, {useState} from 'react'
import { Container, Row, Col, Table, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlus } from "@fortawesome/fontawesome-free-solid";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import classes from "./ClassPeriodicTest.module.css";
import UpdateAttendantModal from "../components/UpdateAttendant";

const DUMMY_STUDENTS = [
  {
    StudentID: "20520334",
    Name: "Nguyễn Thành Trung",
    ImageURL:
      "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    attendance: [],
    present: 0
  },
  {
    StudentID: "20521948",
    Name: "Nguyễn Đỗ Nhã Khuyên",
    ImageURL:
      "https://images.pexels.com/photos/3772503/pexels-photo-3772503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    attendance: [],
    present: 0
  },
  {
    StudentID: "20521949",
    Name: "Nguyễn Công Tấn Phát",
    ImageURL:
      "https://images.pexels.com/photos/234507/pexels-photo-234507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    attendance: [],
    present: 0
  },
  {
    StudentID: "20521950",
    Name: "Lê Văn Thiện",
    ImageURL:
      "https://images.pexels.com/photos/953125/pexels-photo-953125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    attendance: [],
    present: 0
  },
  {
    StudentID: "20521097",
    Name: "Đoàn Quốc Bảo",
    ImageURL:
      "https://static-images.vnncdn.net/files/publish/2022/6/11/avajisoo-961.jpg?width=600",
    attendance: [],
    present: 0
  },
  {
    StudentID: "20521952",
    Name: "Lưu Thượng Vỹ",
    ImageURL:
      "https://images.pexels.com/photos/3616652/pexels-photo-3616652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    attendance: [],
    present: 0
  },
  {
    StudentID: "20521932",
    Name: "Nguyễn Thành Long",
    ImageURL:
      "https://media.doisongphapluat.com/thumb_x1280x857/media/trieu-phuong-linh/2023/02/15/jisoo-blackpink-va-khoi-tai-san-khung21.png",
    attendance: [],
    present: 0
  },
];


const Arrays =['5/3','8/3', '11/3', '15/3','18/3','21/3','24/3'];

function ClassAttendant() {

  const [isUpdating, setIsUpdating] = useState(false);
  const [isAddingAttendant, setIsAddingAttendant] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const updateHandler = () => {
    setIsUpdating(true);
    setTimeout(() => {
      const newCheckCol = document.getElementById("newCheckCol");
      newCheckCol.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100)
  };

  const addHandler = () => {
    setIsAddingAttendant(true);
  };

  const closeAddHandler = () => {
    setIsAddingAttendant(false);
  };

  const savePeriodicHandler = () => {
    setIsEditable(true);
  };

// ---------------------XỬ LÍ CHECKBOX--------------------
  const [students, setStudents] = useState(DUMMY_STUDENTS);

  const [currentSession,] = useState(1);

  const handleAttendanceChange = (e, studentId) => {
    const checked = e.target.checked;
    const updatedStudents = students.map((student) => {
      if (student.StudentID === studentId) {
        const updatedAttendance = [...student.attendance];
        updatedAttendance[currentSession - 1] = checked;
        let updatedPresent = student.present;
        if (checked) {
          updatedPresent += 1;
        } else {
          updatedPresent -= 1;
        }
        return { ...student, attendance: updatedAttendance, present: updatedPresent };
      } else {
        return student;
      }
    });
    setStudents(updatedStudents);
  };

  return (
    <Container className="bg-light p-4 rounded-4">
      <Row className="align-items-center">
        <Col>
          <h3>Attendant Checking</h3>
          <p>
            Total number of occurred lessons: <span className="fw-bold">{Arrays.length}</span>
          </p>
        </Col>
        <Col className="d-flex justify-content-end">
          {!isUpdating &&
            <button
              onClick={updateHandler}
              className="bg-primary d-flex align-items-center text-light py-2 px-3 rounded-2 text-decoration-none border-0"
            >
              <FontAwesomeIcon icon={faPenToSquare} />
              <span className="ps-2">Update</span>
            </button>
          }
          {isUpdating && (
            <button
              onClick={updateHandler}
              className="bg-primary d-flex align-items-center text-light py-2 px-3 rounded-2 text-decoration-none border-0"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span className="ps-2">Save</span>
            </button>
          )}
        </Col>

      </Row>
      <div className={classes['table-div']} id="tableDiv">
        <Table bordered className={classes.table} >
          <thead>
            <tr>
              <th style={{maxWidth:'50px'}}>NAME</th>
              <th>Present</th>
              {Arrays.map((date) => (
                <th key={date}>{date}</th>
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
          <tbody style={{fontSize:'14px'}} >
          {students.map((student) => (
            <tr key={student.StudentID}>
              <th>
                  <div className={classes.imgDiv}>
                    <img
                      style={{
                        height: "100%",
                      }}
                      src={student.ImageURL}
                      alt={student.Name}
                    ></img>
                  </div>
                  <div>
                    <p className="mb-0 text-nowrap fw-bold">{student.Name}</p>
                    <p className="mb-0 fw-light">{student.StudentID}</p>
                  </div>
                </th>
              
              <td>{student.present}</td>

              {Arrays.map((_, i) => (
                <td key={i}>
                  <Form.Check
                    type="checkbox"
                    onChange={(e) => handleAttendanceChange(e, student.StudentID)}
                  />
                </td>
              ))}

              {isUpdating && (
              <td id="newCheckCol">
                <input
                  readOnly={!isEditable}
                  className="form-check-input"
                />
              </td>
              )}
            </tr>
          ))}
          </tbody>
        </Table>
      </div>

      {isAddingAttendant && (
        <UpdateAttendantModal
          onCloseModal={closeAddHandler}
          onSavePeriodic={savePeriodicHandler}
        />
      )}
    </Container>
  )
}

export default ClassAttendant