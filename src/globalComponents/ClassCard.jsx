import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";

function ClassCard({ classInfo, bgColor }) {
  // const colorBg = [
  //   "#1C64F2",
  //   "#BC2FB6",
  //   "#9B51E0",
  //   "#F2C94C",
  //   "#F2994A",
  //   "#1BB0A7",
  //   "#E83480",
  //   "#27AE60",
  //   "#2D9CDB",
  // ];
  // let indexColor = Math.floor(Math.random() * 10);
  // let bgColor =
  //   colorBg[indexColor < colorBg.length ? indexColor : 0];
  console.log(bgColor)
  const { id, className, teacher,  number, target, time } = classInfo;
  return (
    <Card
      key={id}
      text={bgColor === "light" ? "dark" : "white"}
      style={{backgroundColor: bgColor }}
      className="mb-3"
    >
      <Card.Body>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"8px"}}>
        <FontAwesomeIcon icon="fa-solid fa-book-open" style={{width:"16px", marginTop:"-4px"}}/>
        <Card.Title className="text-center" style={{fontSize:"18px", fontWeight:700}}> {className} </Card.Title>
        </div>
        <Card.Text className="text-center" style={{fontSize:"14px", fontWeight:400, marginBottom:"4px"}}>
          {teacher} | {number} students
        </Card.Text>
        <Card.Text className="text-center" style={{fontSize:"14px", fontWeight:400, marginBottom:"4px"}}>Target: {target}</Card.Text>
        <Card.Text className="text-center" style={{fontSize:"14px", fontWeight:400, marginBottom:"4px"}}>{time}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ClassCard;
