import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  Logo  from '../../assets/images/global/LogoLogin.svg'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";


function LoginPage() {
  const [teacherList, setTeacherList] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('http://localhost:3001/api/v1/teacher');
        console.log("Teacher: ",result.data.ResponseResult.Result);
        setTeacherList(result.data.ResponseResult.Result);
      };
      fetchData();
    }, []);

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
      if (email=="admin" && password=="admin"){
        navigate('/');
      } else {
        const results = [];
        teacherList.forEach((tea, index) => {
          results.push(
            tea.TeacherID
          );
        });
        console.log('TeacherID: ',results);
        if (results.includes(email) && password=="teacher") {
          navigate('/teachers');
        }
        else{
          alert("The Username of Password is incorrect. Please try again!")
        }
      }
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
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{marginTop: "60px"}}>
    <img src={Logo} alt="Logo image" fluid style={{marginTop: "40px", marginBottom: "20px"}}/>
    <h2>Sign in to your account</h2>
    <p className='mb-5'>Or <Link style={{textDecoration:"none"}} to="/">contact admin to create new account</Link></p> 
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail" style={{ width: '500px'}}>
        <Form.Control 
          type="text" 
          placeholder="Username"
          value={email}
          style={{borderRadius: "8px 8px 0px 0px"}}
          onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control 
          type="password" 
          placeholder="Password"
          style={{borderRadius: "0px 0px 8px 8px"}}
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
                <Link style={{textDecoration:"none"}} to="/">Forgot your password?</Link>
              </Col>
            </Row>
            
          </div>
        ))}
      
      <Button variant="primary" type="submit" className="w-100 mt-3">
        
        Sign in
      </Button>
    </Form>
  </Container>
  );
  }
export default LoginPage;
