import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

function ListStudentView({ topStudents }) {
  return (
    <ListGroup as="ol">
      {topStudents.map((student)=>{
        console.log("student: ", student)
        return (
          <>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start border-0"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{student.StudentID.Name}</div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#6B7280",
                  }}
                >
                  {student.StudentID.StudentID} | {student.StudentID.NameClass}
                </div>
              </div>
              <Badge bg="primary" pill style={{ marginTop: "12px" }}>
                {student.TotalScore}/100
              </Badge>
            </ListGroup.Item>
            <div
              style={{
                width: "93%",
                border: "0.75px solid #E5E7EB",
                marginLeft: "24px",
              }}
            ></div>
          </>
        );
      })}
    </ListGroup>
  );
}

export default ListStudentView;
