import './App.css';
import {sum, diff} from './utility.js';
import NameTag from './NameTag.js';

const pi = 3.14;
const static_value = 1000;

function App() {

  return (
    <div className="App">
      <NameTag name = "격하게" tag="집에" colo="red"/>
      <NameTag name = "아무것도" tag="보내"/>
      <NameTag name = "하기싫다" tag="줘라"/>
    </div>
  );
}

export default App;