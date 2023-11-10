import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import ResumeTemplate from "./components/resume/Resume"

const App = () => {
  //👇🏻 state holding the result
  const [result, setResult] = useState({});
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='resume-template' element={<ResumeTemplate />}/>
          <Route path='/' element={<Home setResult={setResult} />} />
          <Route path='/resume' element={<Resume result={result} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;