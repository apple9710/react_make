

import Calendar from "./componants/Calendar.js";

const jsonData= require('./test.json'); 
console.log(jsonData);



function App() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default App;
