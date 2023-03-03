import {useState} from "react"

function Calendar(){

  var now = new Date();

  var date = now.getDate();

  var krMonth = ["해오름달","시샘달","물오름달","잎새달","푸른달","누리달","견우직녀달","타오름달","열매달","하늘연달","미틈달","매듭달"]
  var month = now.getMonth();
  var year = now.getFullYear();

  let Mm = month + 0;



  const [nowMonth , setNowMonth] = useState(Mm)

  function btnNext(){
    setNowMonth(nowMonth + 1)
    if(nowMonth >= krMonth.length -1){
      setNowMonth(0)
    }
    console.log(nowMonth)
  }
  








  function Table(){
    return (
      <div>
        <button onClick={btnNext}>
          Next
        </button>
        <button onClick={btnNext}>
          Next
        </button>
        <table>

        </table>
      </div>
    )

  }



  return (
    <div>
      <h1>{year},{krMonth[nowMonth]},{date} </h1>
      <Table />
    </div>
  )
}

export default Calendar;