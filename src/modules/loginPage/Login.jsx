import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
    }
  return (
    // <Container>
    //   <Form>
    //     <Form.Group controlId="formBasicEmail">
    //       <Form.Control type="email" placeholder="Account" />
    //     </Form.Group>

    //     <Form.Group controlId="formBasicPassword">
    //       <Form.Control type="password" placeholder="Password" />
    //     </Form.Group>

    //     <Button variant="primary" type="submit">
    //       Submit
    //     </Button>
    //   </Form>
    // </Container>
    <Container className="d-flex flex-column justify-content-center align-items-center">
    <Image src="{../../assets/images/global/logo.png}" alt="Logo image" fluid />
    <h2>Sign in to your account</h2>
    <p className='mb-5'>Or <Link to="/">contact admin to create new account</Link></p> 
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail" style={{ width: '500px' }}>
        <Form.Control 
          type="text" 
          placeholder="Account"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
        {['checkbox'].map((type) => (
          <div key={`default ${type}`} className="mt-3">
            <Row>
              <Col>
                <Form.Check 
                type={type}
                id={`default`}
                label={`Remember me`}
                />
              </Col>
              <Col className="d-flex justify-content-end">
                <Link to="/">Forgot your password?</Link>
              </Col>
            </Row>
            
          </div>
        ))}
      
      <Button variant="primary" type="submit" className="w-100 mt-3">
        <FontAwesomeIcon icon="fa-solid fa-lock" />
        Sign in
      </Button>
    </Form>
  </Container>
  );
  }
export default LoginPage;
