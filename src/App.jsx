import React , {useState}from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css'
import Stars from './Components/Stars/Stars';

function App() {
  const [priority, setNumber] = useState("1")


  return (
    <div className="App">
      <h1>hello</h1>
      {/* <p>This is to demonstrate the use case of state handling and passing of props while also illustrating a simple 5 star rating system.</p> */}
      <p>This is to demonstrate the use case of state handling and passing of props while also illustrating a simple 5 star rating system.</p>
      <Container>
        <Row>
        <Col><Button onClick={(e => {setNumber(e.target.value)})} value="1">1</Button>
        <Button onClick={(e => {setNumber(e.target.value)})} value="2">2</Button>
        <Button onClick={(e => {setNumber(e.target.value)})} value="3">3</Button>
        <Button onClick={(e => {setNumber(e.target.value)})} value="4">4</Button>
        <Button onClick={(e => {setNumber(e.target.value)})} value="5">5</Button></Col>


        </Row>
        </Container>
      <Stars
        priority={priority}
        setNumber={setNumber}
      />
    </div>
  )
}

export default App
