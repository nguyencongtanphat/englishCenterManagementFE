import Card from "react-bootstrap/Card";

function ClassCard({ classInfo, bgColor }) {
  console.log(bgColor);
  const { id, className, teacher, number, target, time } = classInfo;
  return (
    <Card
      key={id}
      text={bgColor === "light" ? "dark" : "white"}
      style={{ backgroundColor: bgColor }}
      className="mb-2"
    >
      <Card.Body>
        <Card.Title className="text-center mb-0"> {className} </Card.Title>
        <Card.Text className="text-center mb-0">{number} students</Card.Text>
        <Card.Text className="text-center mb-0">Target: {target}</Card.Text>
        <Card.Text className="text-center mb-0">{time}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ClassCard;
