import styles from "../style.module.css";


function Modal({ setModalOpen, schedule ,idx}) {
  // 모달 끄기 
  const closeModal = () => {
      setModalOpen(false);
  };

  // 스케줄 담아줄 변수
  let schList = [];
  let schText = "";
  console.log(schedule.keys(idx));
  

  // 스케줄 리스트 출력
  for(let i = 0; i < schedule.get(idx).do.length; i++){
    schList.push(<li key = {i +"schList"}>{"횟수" + i}</li>)
  }

  function submitText(e){
    schText = e.target.value;
  }

  // 스케줄 추가 부분
  function submitSchedule(){


    schedule.get(idx).do.push(<li key={schText}>{schText}</li>)
    console.log(schedule.get(idx).do)
  }

  return (
      <div  className={styles.container}>
          <button key="close" className={styles.close} onClick={closeModal}>X
          </button>
          <h3>{idx}</h3>
          <input onChange={submitText} placeholder="일정을 입력하세요"/>
          <ul>
            {schedule.get(idx).do}
          </ul>
          <button onClick={submitSchedule}>추가</button>
      </div>
  );
}
export default Modal;