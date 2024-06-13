import React from "react";
import Card from "./UI/Card";
// import './ExpenseList.css';

// ⭐ children -> 하위태그를 조작할 수 있는 (아래 리턴 태그 사이에 하위태그 껴줌!)
const Greet = (ccc) => {

  return (
    <Card className='border-green'>
      <h1>
        Hello REACT!
        {ccc.children}
      </h1>
    </Card>
  );
};

export default Greet;