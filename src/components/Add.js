import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 100, 100, 0.6);
  height: 75px;
  width: 80vw;
  min-width: 150px;
  border-radius: 20px 20px 0 0;
`;
const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  color: rgba(74, 74, 74);
  font-weight: 500;
  font-size: 18px;
  background-color: rgba(74, 74, 74, 0.4);
  height: 35px;
  width: 500px;
  border-radius: 20px 0 0 20px;
  border: none;
  transition: 0.4s ease-in-out;
  text-decoration: none;
  padding-left: 10px;
  &:hover {
    height: 50px;
    width: 600px;
    background-color: rgba(245, 222, 179, 0.6);
    color: rgba(74, 74, 74);
  }
  &:focus {
    height: 50px;
    width: 600px;
    outline: none;
    background-color: rgba(245, 222, 179, 0.6);
    color: rgba(74, 74, 74);
  }
  ::placeholder {
    color: rgb(245, 222, 179);
  }
`;
const Button = styled.button`
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-align: center;
  width: 150px;
  height: 50px;
  border-radius: 0 5px 5px 0;
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 150, 255, 0.8);
  animation: TransitioningBackground 10s ease infinite;
  transition: 0.2s;

  &::before {
    content: "";
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 1);
    width: 60px;
    height: 100%;
    top: 0;
    filter: blur(30px);
    transform: translateX(-100px) skewX(-15deg);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 1);
    width: 30px;
    height: 100%;
    top: 0;
    filter: blur(5px);
    transform: translateX(-100px) skewX(-15deg);
  }

  &:hover {
    opacity: 1;
    transform: scale(1);
    cursor: pointer;
    &::before,
    &::after {
      transform: translateX(300px) skewX(-15deg);
      transition: 1s;
    }
  }
`;
const Alert = styled.p`
  font-weight: 500;
  font-size: 18px;
  width: 120px;
  height: 50px;
  padding: 0 15px 0 0;
  margin: 0;
  color: chocolate;
  display: ${(props) => props.theme.display};
`;
const Add = ({ toDoList, setToDoList }) => {
  const [Alerter, setAlerter] = useState({ display: "none" });
  const [input, setInput] = useState();
  let temp = document.getElementById("input");
  let organizeText = (i) => {
    let temp = i;
    temp = temp.toLowerCase().split(" ");
    for (let i = 0; i < temp.length; i++) {
      let item = temp[i];
      item = item.charAt(0).toUpperCase() + item.substr(1);
      temp[i] = item;
    }
    let tempString = "";
    for (let i = 0; i < temp.length; i++) {
      tempString = tempString + " " + temp[i];
    }
    return tempString.substring(1);
  };
  let addTask = () => {
    if (temp.value) {
      setToDoList([
        ...toDoList,
        { id: uuid(), task: organizeText(input), done: false },
      ]);
      temp.value = "";
      setAlerter({ display: "none" });
    } else {
      setAlerter({ display: "block" });
    }
  };
  let handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <Container>
      <InnerContainer>
        <Alert theme={Alerter}>Task field can't be empty!</Alert>
        <Input
          type="text"
          id="input"
          placeholder="Task"
          onChange={handleChange}
        />
        <Button type="submit" id="add" onClick={addTask}>
          Add Task
        </Button>
      </InnerContainer>
    </Container>
  );
};

export default Add;
