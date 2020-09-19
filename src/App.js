import React from 'react';
import './App.css';
import Youtube from './Youtube';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Media from 'react-bootstrap/Media';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Random Vidz</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      <Nav 
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Category 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Category 2</Nav.Link>
          </Nav.Item>
      </Nav>
      </Navbar.Collapse>
  </Navbar>

  <Container fluid id="video-container">
  <Row>
  <Col > 
  <Media >
  <Youtube/>
  <Media.Body>
    
  </Media.Body>
</Media>
</Col>
</Row>
</Container>
    </div>
  );
}

export default App;
