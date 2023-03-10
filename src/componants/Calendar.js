import {useState} from 'react';
import styles from '../style.module.css'
import Modal from './Modal.js'


let schedule = new Map();
//날짜 담을 변수
let idx = "";

function Calendar(){

// 달력 데이터
  let header = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  
    let now = new Date(); // 현제 시간

    const [plusMonth,setPlusMonth] = useState(0);

    let monthStart = new Date();//달의 1일
    let monthEnd = new Date();// 달의 말일
    let startDate = new Date();// 1주차 시작일
    let endDate = new Date();// 마지막 주차 말일

    now.setMonth(now.getMonth() + plusMonth)
    //plusMonth 더해서 월 맞춰주기 monthEnd에는 1개월 더해서 빼고 말일 계산
    monthStart.setMonth(now.getMonth() + plusMonth); 
    monthEnd.setMonth(now.getMonth() + 1 + plusMonth); 
    startDate.setMonth(now.getMonth() + plusMonth); 
    endDate.setMonth(now.getMonth() + plusMonth); 



    // 지정된 날짜 - 지정된 날짜 로 말일 구하고 해당 일에서 + 1 해줘서 시작일구하기
    monthStart.setDate(monthStart.getDate() - monthStart.getDate() + 1);
    monthEnd.setDate(monthEnd.getDate() - monthEnd.getDate());

    //시작일과 말일에서 요일 구한 후에 빼줘서 시작 주의 일 구하기
    startDate.setDate(monthStart.getDate() - monthStart.getDay());
    endDate.setDate(monthEnd.getDate() + (6 - monthEnd.getDay()));

    // 삼항 연산자 사용해서 월 마지막 날이 같을 경우 다음달 더하기 X
    let oneMonth = 
    monthStart.getDay() + 
    monthEnd.getDate() + 
    (monthEnd.getDate() === endDate.getDate() ?  0: endDate.getDate());


    //버튼 클릭시 월 이동
    function nextClick(){
      setPlusMonth(plusMonth + 1)
    };
    function prevClick(){
      setPlusMonth(plusMonth - 1)
    };

    


// 클릭이벤트

    // if 문으로 배열에 같은 날짜가 있는지 여부 확인 후 해당 날짜의 index를 찾고 do에는 해당 index의 맨 뒤에 , 를 붙혀 구분
    function thisClick(e){

      //해당 날짜 찾기
      let findIdx = monthStart.getFullYear()+"-" + monthStart.getMonth()+ "-"+ e.target.innerHTML;

      idx = findIdx;
      
     if( schedule.has(findIdx)) {
         // length-> size
        // let inputStr = schedule.get(findIdx).do.length +findIdx;
        // schedule.get(findIdx).do.push(inputStr);
     }
     else {
         schedule.set(findIdx, {do : []});
     }

     showModal();


}




    let arr = [];
    let row = []; 
    let rowIdx = 0; //tr 키값


    for(let i = 0; i <oneMonth; i++){
      // 전달 구하는 if문
      if(i < monthStart.getDay()){
        arr.push(<td className={styles.last_month} key = {i +"prevMonth"}>{startDate.getDate() +(i)}</td>);
      }//이번달 구하는 if문
      else if(monthStart.getDay() <= i && i < monthEnd.getDate() + monthStart.getDay() ){
        arr.push(<td key = {i +"nowMonth"} onClick={(e)=>{
          thisClick(e);



        }}>{(i + 1) - monthStart.getDay()}</td>);
      }//다음달 구하는 if문
      else if (monthEnd.getDate() + monthStart.getDay() <= i && i < oneMonth ){
        arr.push(<td key = {i +"nextMonth"}>{(i + 1) - (monthStart.getDay() + monthEnd.getDate())}</td>);
      };
      //arr 의 길이가 7 이상이면 row 에 push
      if(arr.length === 7){
        row.push(<tr key={rowIdx}>{arr}</tr>);
        rowIdx++;
        arr = [];
      };
    };

    // 모달 스테이트
const [modalOpen, setModalOpen] = useState(false);

// 모달창 노출
const showModal = () => {
    setModalOpen(true);
};


  return (
    <div className={styles.calendar}>

      <h1 key={plusMonth + now.getMonth()}>{now.getMonth() + 1 +'월'}</h1>
      <button onClick={prevClick}>prev</button>
      <button onClick={nextClick}>next</button>
      <table>
        <thead>
          <tr>
            {header.map((item)=>{
              return <th key={item}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
            {row}
            
        </tbody>
      </table>
      {modalOpen && <Modal setModalOpen={setModalOpen} 
            schedule = {schedule}
            idx = {idx}
            />
            
            }
    </div>  
  );
};

export default Calendar;