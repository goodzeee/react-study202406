// .js 앞글자가 대문자이면 React Component 이다 !
import React from 'react'
import './ExpenseItem.css'; // css 경로만 넣어주면 됨 !

//⭐(aaa) - 파라미터들이 객체타입으로 전달됨 (키-값 쌍으로 !)⭐
const ExpenseItem = ({ date, title, price:exPrice }) => {

  //console.log('props: ', aaa); // App.js 객체쌍으로 값이 전달됨 !

  // 변수 선언 -> 출력할 때 {변수명}
  // const expenseDate = date;
  // const expenseTitle = title;
  // const expensePrice = exPrice;

  // 함수 선언
  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };

  const makeFormattedDate = () => {

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };


  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(exPrice);

  return (
    <div className='expense-item'>
      <div>{makeFormattedDate()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{formattedPrice}원</div>
      </div>
    </div>
  )
}

export default ExpenseItem;