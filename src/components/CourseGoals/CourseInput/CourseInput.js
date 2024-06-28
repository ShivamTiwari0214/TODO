import React, { useState } from "react";
// import styled from "styled-components";
import Button from "../../UI/Button/Button";
import style from "./CourseInput.module.css";

// const FormControl = styled.div`
//   & {
//     margin: 0.5rem 0;
//   }

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color:${props => props.valid?'Red':'Black'};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.valid ? "red" : "#ccc")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     ${(props) => (props.valid ? "background:#ffd7d7;" : "")}
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isvalid, setisValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) setisValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setisValid(false);
      return;
    } else {
      setisValid(true);
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${style['form-control']} ${isvalid? "valid" : style.invalid}`}>
        <label >Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          placeholder={isvalid ? "" : "Kindly Enter"}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
