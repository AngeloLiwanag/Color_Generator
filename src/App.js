import React from 'react';
import './App.css';
import Generator from './components/Generator';

function App() {

  return (
    <div className="App">
      ----------- This is from ./App -----------
      <Generator/>
    </div>
  );
}

export default App;
// function App() {
//   const [state, setState] = useState ({
//     color: "",
//     submit: false
//   });

//   return (
//     <div className="App">
//       ----------- This is from ./App -----------
//       <Generator inputs={state} setInputs={setState}/>
//       <Box data={state}/>
//     </div>
//   );
// }