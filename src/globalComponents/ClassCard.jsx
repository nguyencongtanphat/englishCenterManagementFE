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
      className="mb-2"
    >
      <Card.Body>
        <Card.Title className="text-center"> {className} </Card.Title>
        <Card.Text className="text-center">
          {teacher} | {number} students
        </Card.Text>
        <Card.Text className="text-center">Target: {target}</Card.Text>
        <Card.Text className="text-center">{time}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ClassCard;
