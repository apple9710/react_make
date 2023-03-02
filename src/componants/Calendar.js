import styles from "../Main.module.css";
function Calendar(){
  var now = new Date()

  
  var year = now.getFullYear();
  var monthArr = ["해오름달", "시샘달", "물오름달", "잎새달", "푸른달", "누리달", "견우직녀달", "타오름달", "열매달", "하늘연달", "미틈달", "매듭달"]
  var month = now.getMonth();
  var dayArr = ["일","월","화","수","목","금","토"]
  var day = now.getDate();


  var startDate = new Date();
  var endDate = new Date();
  function nextMonth(){
    


    let nextDay = new Date();
    let dayMin = 0;



    nextDay.setMonth(now.getMonth() + 2)

    dayMin = nextDay.getDate()

    startDate.setDate(endDate.getDate() - endDate.getDate() + 1)
    

    endDate.setMonth(now.getMonth() + 1)
    endDate.setDate(nextDay.getDate() - dayMin)
    

  }
  nextMonth()

  console.log(startDate)
  console.log(endDate)


  const dayRender = ()=>{
    const answer = [];
    for(let i = 0; i< dayArr.length; i++){
      answer.push(<th className={styles.table_head} key={i}>{dayArr[i]}</th>)
    }
    return answer
  }
  const dateRender = ()=>{
    const answer = [];
    for(let i =0; i< endDate.getDate(); i++){
      answer.push(i)
    }
    return answer
  }


  function Table(){
    return (<table>
    <thead>
      <tr>
        {dayRender()}
      </tr>
      
    </thead>
    <tbody>
      <tr>
        <td>{dateRender()}</td>
      </tr>
    </tbody>
  </table>
    )
  }


  return (
    <div>
      <h1>{year},{monthArr[month]},{day}일</h1>

      <Table />
    </div>
  );
}


export default Calendar;