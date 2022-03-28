import React from "react";
import Course from "./Course";
import { CSSCourses } from "../../data/courses";

const CSS = (props) => {
  let courses = CSSCourses.map((data) => {
    return (
      <Course
        title={data.title}
        desc={data.description}
        img={data.img_src}
        key={data.id}
      />
    );
  });
  return (
    <div>
      <ul>{courses}</ul>
    </div>
  );
};

export default CSS;
