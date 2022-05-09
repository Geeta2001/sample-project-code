import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col} from 'reactstrap';
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer, toast} from 'react-toastify';
import Header from './components/Header';
import Home from './components/Home';
import Exams from './components/Exams';
import AllExams from './components/AllExams';
import AddExams from './components/AddExams';
import Menu from './components/Menu';
import { BrowserRouter as Router, Link, Route, Routes , About } from 'react-router-dom';
function App() {
  
  const buttonHandler = () => {
    toast.success("button clicked", {
      position:'top-center'
    });  
  };

  return ( <div>
    <Router>
    <ToastContainer/>
    <Container>
      <Header></Header>
      <Row>
        <Col md={4}>
          <Menu/>
        </Col>
        <Col md={8}>
        <Routes>
          <Route path='/' element={<AllExams/>} exact />
          <Route path='/addexam' element={<AddExams/>} exact />
        </Routes>
        </Col>
      </Row>
    </Container>
    </Router>
  </div>
  );
}

export default App;