import Card from "react-bootstrap/Card";

function ClassCard({color}) {
  return (
    <Card
     
      bg={color.toLowerCase()}
      key={color}
      text={color.toLowerCase() === "light" ? "dark" : "white"}
      style={{ width: "180px" }}
      className="mb-2"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>{color} Card Title </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ClassCard;
