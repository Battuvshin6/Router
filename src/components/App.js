import React from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import About from './About'
import Teachers from './Teachers'
import Home from "./Home"
import Header from './Header'
import Courses from './Courses'
import NotFound from "./NotFound";
import Featured from './Featured'
const App = () => {
  return (
      <BrowserRouter>
      <div className="container">
        <Header/>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About title='About us'/>}></Route>
       <Route path='/teachers' element={<Teachers/>}> </Route>
       <Route path='/courses/*' element={<Courses/>}></Route>
       <Route path='/courses' element={<Navigate to='/courses/html'/>}></Route>
       <Route path="*" element={<NotFound/>}></Route>
       <Route path='/teachers/:topic/:name' element={<Featured/>}></Route>
      
     </Routes>
    </div>
</BrowserRouter>
  );
};

export default App;
