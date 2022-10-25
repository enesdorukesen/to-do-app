import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 15px 30px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-align: center;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

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
    transform: scale(1.2);
    cursor: pointer;
    &::before,
    &::after {
      transform: translateX(300px) skewX(-15deg);
      transition: 1s;
    }
  }
`;
const DelButton = styled(Button)`
  color: red;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.5);
  &:hover {
    color: white;
    background: rgba(250, 0, 0, 1);
    background: linear-gradient(
      90deg,
      rgba(250, 0, 0, 1) 0%,
      rgba(250, 0, 0, 1) 100%
    );
  }
`;
const DoneButton = styled(Button)`
  overflow: hidden;
  padding: 0;
  color: green;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.5);
  &:hover {
    color: rgba(74, 74, 74, 1);
    background: linear-gradient(
      90deg,
      rgba(0, 255, 0, 0.8) 0%,
      rgba(0, 255, 0, 1) 100%
    );
  }
`;
const DoneIcon = styled.div`
  position: relative;
  top: -51px;
  left: 64px;
`;
const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.2);
  flex-direction: column;
  padding-top: 5px;
  width: 80vw;
  min-width: 30px;
  border-radius: 0 0 20px 20px;
`;
const Task = styled.div`
  color: wheat;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(74, 74, 74, 0.6);
  height: 75px;
  width: 99%;
  min-width: 150px;
  border-radius: 20px;
  transition: all 0.6s ease-out;
  opacity: 1;
  p {
    margin-left: 15px;
  }

  &:hover {
    color: rgba(74, 74, 74, 1);
    background-color: rgba(245, 222, 179, 0.6);
  }
`;

const List = ({ toDoList, setToDoList }) => {
  let doneButton = (done, id) => {
    let handleClick = () => {
      let targetObject = toDoList.filter((i) => i.id === id);
      let temp = [toDoList.filter((i) => i.id !== targetObject[0].id)][0];
      console.log(temp);
      targetObject[0].done = !targetObject[0].done;
      console.log(targetObject[0]);
      temp.push(targetObject[0]);
      console.log(temp);
      setToDoList(temp);
    };
    if (done) {
      return (
        <DoneButton
          onClick={() => {
            handleClick(done, id);
          }}
        >
          <p>Done</p>{" "}
          <DoneIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-bookmark-check-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
              />
            </svg>
          </DoneIcon>
        </DoneButton>
      );
    } else {
      return (
        <DoneButton
          onClick={() => {
            handleClick(done, id);
          }}
        >
          <p>Done</p>
        </DoneButton>
      );
    }
  };
  return (
    <TaskContainer>
      {toDoList
        .sort((a, b) => (a.task > b.task ? 1 : -1))
        .map(({ id, task, done }) => (
          <Task>
            <p>{task}</p>
            <div>
              {doneButton(done, id)}
              <DelButton
                onClick={() =>
                  setToDoList((items) => items.filter((item) => item.id !== id))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </DelButton>
            </div>
          </Task>
        ))}
    </TaskContainer>
  );
};

export default List;
