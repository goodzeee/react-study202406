import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onAdd }) => {

  // 입력칸에 있는 3개의 값을 ⭐단일 상태값으로 관리 - 초기값 넣어주기
  // const [title, setTitle] = useState('');
  // const [price, setPrice] = useState(0);
  // const [date, setDate] = useState(null);

  // 입력칸에 있는 3개의 값을 하나의 ⭐객체 상태값으로 관리
  const [userInput, setUserInput] = useState({
    title: '',
    price: '',
    date: ''
  });

  // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  // 제목이 입력되었을 때 발생하는 이벤트 핸들러
  const titleChangeHandler = e => {

    // 객체나 배열상태로 관리되는 상태값은
    // 상태변경시 새로운 객체나 배열을 setter에 전달해야 함
    setUserInput({    // 📌각 이벤트 핸들러에 맞는 위치에 상태값을 세팅해준다 !
      
      ...userInput, // 상태값 변환해주는 것만 변경시켜주게 ~
      title: e.target.value,
      // price: userInput.price,
      // date: userInput.date
    });
  };

  // 가격이 입력되었을 때 발생하는 이벤트 핸들러
  const priceChangeHandler = e => {
    setUserInput({
      ...userInput,
      price: +e.target.value,
    });
  };

  // 날짜가 입력되었을 때 발생하는 이벤트 핸들러
  const dateChangeHandler = e => {
    setUserInput({
      ...userInput,
      date: e.target.value
    });
  };

  // 폼 전송 이벤트 핸들러
  const submitHandler = e => {
    e.preventDefault(); // 폼 전송 방지
    console.log('폼이 전송됨 !');

    // 지출 내역 객체를 생성
    // const NewExpense = {
    //   title,
    //   price,
    //   date,
    // };

    console.log(userInput);

    // App.js에게 받은 함수를 호출
    onAdd(userInput);

    // form input 비우기 - 초기 화면에 보이는 세팅 !
    setUserInput({
      title: '',
      price: '',
      date: ''
    });

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"
          onChange={titleChangeHandler}
          value={userInput.title}/>
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="100"
            step="100"
            onChange={priceChangeHandler}
            value={userInput.price}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={getTodayDate()}
            onChange={dateChangeHandler}
            value={userInput.date}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
