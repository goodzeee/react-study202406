import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import './ExpenseList.css';
import ExpenseChart from "../chart/ExpenseChart";


const ExpenseList = ({ expenses }) => {

   // 선택된 연도로 재 렌더링하기 위해 연도를 상태값으로 관리
   const [filteredYear, setFilteredYear] 
          = useState(new Date().getFullYear().toString());


  const onFilterChange = (filteredYear) => {
    // ExpenseFilter에 있는 선택된 연도값을 여기서 출력 !
    console.log(filteredYear);
    setFilteredYear(filteredYear);
  };

  // App.js에서 받은 expenses 배열을 <ExpenseItem> 배열로 변환하는 함수
  // const convertToComponentArray = () => {
  //   const mappedArray = expenses.map(ex => <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />);
     // for (const ex of expenses) {
        // const tag = <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />;
        //   newArray.push(tag);
     // }
  //     return mappedArray;
  // };

  // 연도로 필터링한 배열 - 변수로 빼내서 return 하려고
  const filteredExpenses = expenses.filter(ex => ex.date.getFullYear().toString() === filteredYear)

  // 지출 데이터가 있을 때 보여줄 태그
  const expenseContent = filteredExpenses
  .map(({ title, price, date }) => (
  <ExpenseItem
   key={Math.random().toString()}
   title={title}
   price={price}
   date={date}
   />
 ));

 // 지출 데이터가 없을 때 보여줄 태그
 const noContent = <p>해당 연도에 지출 항목이 없습니다.</p>

  return (
    <div className="expenses">
      {/* {[<h1>하하호호</h1>, <h2>룰루랄라</h2>]} */}

      <ExpenseFilter onFilter={onFilterChange} />
      <ExpenseChart expenses={filteredExpenses}/>

      {filteredExpenses.length > 0 ? expenseContent : noContent}
      </div>
    );
  };
  
  export default ExpenseList;


      // /* <ExpenseItem
      //   title={expenses[0].title}
      //   price={expenses[0].price}
      //   date={expenses[0].date}
      // />
      // <ExpenseItem
      //   title={expenses[1].title}
      //   price={expenses[1].price}
      //   date={expenses[1].date}
      // />
      // <ExpenseItem
      //   title={expenses[2].title}
      //   price={expenses[2].price}
      //   date={expenses[2].date}
      // /> */

