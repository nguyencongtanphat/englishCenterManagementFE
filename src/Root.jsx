import { Outlet } from "react-router";
import { Container, Row, Col } from "react-bootstrap";

const Root = () => {
  return (
    <Container>
      {/* <Header /> */}
      <div>header</div>
      <Row>
        <Col>
          <div>SideBar</div>
        </Col>
        <Col>
        {/* content of web will appear here */}
          <Outlet />
        </Col>
      </Row>
      {/* <Footer /> */}
      <div>footer</div>
    </Container>
  );
};
export default Root;
