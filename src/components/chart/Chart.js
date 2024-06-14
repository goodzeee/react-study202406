import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  console.log("dataPoints: ", dataPoints);

  // 반복문 돌려서 1 ~ 12월 label 객체값 가져가기
  // map돌릴 때 key={} 필수로 넣어주기 !!

  /*
     dataPoints 배열에서 12개 요소의 value를 다 더하여 연도 지출총액 계산
     그리고 각 ChartBar에 해당 월지출총액 / 연도지출총액 비율을 전달
  */

  // 1년치 총액
  const totalValue = dataPoints
    .map((dp) => dp.value)
    .reduce((accum, curr) => accum + curr, 0);
  // console.log(totalValue);

  return (
    <div className="chart">
      {dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          label={dp.label}
          currentMonthValue={dp.value}
          totalValue={totalValue}
        />
      ))}
    </div>
  );
};

export default Chart;
