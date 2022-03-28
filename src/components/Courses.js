import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { CSSCourses, HTMLCourses, JSCourses } from "../data/courses";
import CourseContent from "./CourseContent";
const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
          <NavLink to="/html">HTML</NavLink>
        </li>
        <li>
          <NavLink to="/CSS">CSS</NavLink>
        </li>
        <li>
          <NavLink to="/JavaScript">JavaScript</NavLink>
        </li>
      </ul>
    </div>

    {/* Write routes here... */}
    <Routes>
      <Route path="html" element={<CourseContent data={HTMLCourses} />}></Route>
      <Route path="css" element={<CourseContent data={CSSCourses} />}></Route>
      <Route
        path="javascript"
        element={<CourseContent data={JSCourses} />}
      ></Route>
    </Routes>
  </div>
);

export default Courses;
