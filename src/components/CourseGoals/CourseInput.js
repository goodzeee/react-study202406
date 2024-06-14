import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../UI/Button';

const CourseInput = ({ onAdd }) => {

  const [userInput, setUserInput] = useState('');
  

  // 폼 전송 이벤트 핸들러
  const formSubmitHandler = e => {
    e.preventDefault(); // 폼 전송 방지
    console.log('폼이 전송됨 !');

    const newGoalObject = {
      id: Math.random().toString(),
      text: userInput,
    };

    onAdd(newGoalObject);

    // form input 비우기 - 초기 화면에 보이는 세팅 !
    setUserInput('');

  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>나의 목표</label>
        <input type="text" onChange={e => setUserInput(e.target.value)} value={userInput}/>
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;