import React from 'react'

const Counter = (count) => {

  const [itemCount, setItemCount] = React.useState(0);

  const upClickHandler = e => {

    // useState의 setter는 상태값을 업데이트할 때
    // 렌더링 전까지는 이전 상태값을 참조함
    // setItemCount(itemCount + 1);
    

    // 위 문제 해결방법 : 함수형 업데이트를 사용
    setItemCount((prev) => {
      console.log('변경 이전값 : ', prev);
      // 변경 이후값을 반환
      return prev + 1;
    });

    setItemCount(itemCount => itemCount + 1); // 2씩 증가하는 형태

    // 📌 상태값의 변경은 실시간으로 일어나지 않음
    // 해결방법 : useEffect 훅으로 해결 (뒤에 배움)
    console.log('변경 이후값 : ', itemCount);
  };

  return (
    <div>
      <h1>숫자 : {itemCount}</h1>
      <button onClick={upClickHandler}>증가</button>
      <button onClick={e => setItemCount(itemCount - 1)}>감소</button>
    </div>
  )
}

export default Counter