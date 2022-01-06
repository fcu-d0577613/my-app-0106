import React, {useState} from "react";
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from './components/pages/Services';
import GymTable from './components/pages/GymTable';
import SignUp from './components/pages/SignUp';
import AuthService from "./services/auth.service";
import AbericTable from './components/pages/AbericTable';
import Login from './components/pages/Login';
import MyTicket from './components/pages/MyTicket';
import PostCourseComponent from'./components/pages/postCourse-component';
import CourseComponent from'./components/pages/course-component';


function App() {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  return (
    <>
      <Router>
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/news" element={<Services />} />
          <Route exact path="/gymTable" element={<GymTable />} />
          <Route exact path="/AbericTable" element={<AbericTable 
                 currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/postcourse" element={<PostCourseComponent 
                 currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          <Route exact path="/login" element={<Login 
                 currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          <Route exact path="/myTicket" element={<MyTicket 
                 currentUser={currentUser} setCurrentUser={setCurrentUser}/>} /> 
          <Route exact path="/courses" element={<CourseComponent 
                 currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />       

        </Routes>
      </Router>
    </>
  );
}

export default App;
