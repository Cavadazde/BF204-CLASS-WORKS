import React, { useState } from "react";
import { nanoid } from "nanoid";

const AddForm = ({data, setData}) => {
  const [courseName, setCourseName] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [courseImage, setCourseImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newCourse = {
      id: nanoid(),
      name: courseName,
      price: coursePrice,
      img: courseImage,
    };

    console.log(newCourse);
    setData([...data, newCourse]);
    setCourseName("");
    setCoursePrice(0);
    setCourseImage("");
  };

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="box">
          <label htmlFor="">Course Name</label> <br />
          <input
            type="text"
            onChange={(e) => setCourseName(e.target.value)}
            value={courseName}
          />
          <br />
        </div>

        <div className="box">
          <label htmlFor="">Course Price</label> <br />
          <input
            type="number"
            onChange={(e) => setCoursePrice(e.target.value)}
            value={coursePrice}
          />
          <br />
        </div>

        <div className="box">
          <label htmlFor="">Course Image</label> <br />
          <input
            type="text"
            onChange={(e) => setCourseImage(e.target.value)}
            value={courseImage}
          />
        </div>
        <button className="btn btn-outline-success" type="submit">
          Add Course
        </button>
      </form>
    </>
  );
};

export default AddForm;
