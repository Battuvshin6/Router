import React from "react";
import Course from "./Course";
import { HTMLCourses } from "../../data/courses";

const HTML = (props) => {
  let courses = HTMLCourses.map((data) => {
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

export default HTML;
