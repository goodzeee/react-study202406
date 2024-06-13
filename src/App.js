import React from 'react';
import './App.css';
import ExpenseList from './components/expenses/ExpenseList';
import Greet from './components/Greet';
import Counter from './components/practice/Counter';
import NewExpense from './components/new-expense/NewExpense';
import CheckBoxStyle from './components/practice/CheckBoxStyle';

// 태그를 추가하여 넣는

// jsx 문법 (벡틱 없이 태그 삽입 가능)
const $h2 = <h2>에이치아이 ~~</h2>;

//⭐jsx 태그 규칙⭐
// 1. return 안에 있는 태그는 반드시 하나의 태그로 묶어야 함.(형제태그 존재시 하나의 부모 태그로 묶기)
// 2. 빈 태그(단는 태그가 없)는 반드시 />로 마감
// 3. 태그의 class 속성은 JS 키워드 class와 겹쳐서 className으로 표기
// 4. 의미없는 부모 태그는 <React.Fragment> , 축약ver <> 로 감싸라
// 5. 변수값이나 함수를 출력할 때는 {}로 감싸라
const hello = "안녕하세요 ! 환영합니다 !";

const App = () => {
  // 서버에서 지출항목 json 배열을 응답 받음
  const expenses = [
    {
      title: "기쁨이 텀블러",
      price: 11000,
      date: new Date(2024, 6 -1, 9),
    },
    {
      title: "떡튀순세트",
      price: 6000,
      date: new Date(2024, 6 -1, 11),
    },
    {
      title: "버블티",
      price: 4500,
      date: new Date(2024, 6 -1, 11),
    },
  ];

  // ExpenseForm에게 내려보낼 함수
  const onAddExpense = (userInput) => {
    console.log('App.js가 내려보낸 함수 호출 !');
    //console.log(userInput);

    expenses.push(userInput);
    console.log(expenses);
  };

  return (
    <>
      {/* <div className="App">
      <h1>{hello}</h1>
      {$h2}
    </div>
    <div className='noname'>
      <input type='text' />
      <label htmlFor='#'></label>
    </div> */}
      {/* <Hello />
    <Bye />
    <Greet /> */}
      {/* <CheckBoxStyle /> */}
      <NewExpense onSave={onAddExpense}/>
      <ExpenseList expenses = {expenses}/>

    </>
  );
};

export default App;
