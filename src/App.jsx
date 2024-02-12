import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Schedule from './Components/Schedule/Schedule';
import Workshops from './Components/Workshops/Workshops';
import AddWorkshop from './Components/Workshops/Add_Workshop';
import UpdateWorkshop from './Components/Workshops/Update_Workshop';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Registration" element={<Registration />} />
        <Route path="Schedule" element={<Schedule />} />
        <Route path="Workshops" element={<Workshops />} />
        <Route path="AddWorkshop" element={<AddWorkshop />} />
        <Route path="UpdateWorkshop" element={<UpdateWorkshop />} />
        <Route path="Navbar" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;