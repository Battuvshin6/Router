import React from "react";
import { useParams } from "react-router-dom";
const Featured = () => {
  let para = useParams();
  return (
    <div className="main-content">
      <h2>{para.name} </h2>
      <p>
        Introducing <strong></strong>, a teacher who loves teaching courses
        about {para.topic}
        <strong></strong>!
      </p>
    </div>
  );
};

export default Featured;
