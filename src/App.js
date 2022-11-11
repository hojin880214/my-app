import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChangeValue = (e) => {
    setTodo(e.target.value);
  }
  function fnOnSubmit(e) {
    e.preventDefault();
    if(toDo === ""){
      return;
    }
    setTodos(function (array) {
      return [toDo, ...array];
    })

  }
  console.log(toDos);
    return (
    <div>
      <h2>할일들({toDos.length})</h2>
      <form onSubmit={fnOnSubmit}>
        <input type="text" value={toDo} onChange={onChangeValue} placeholder="여기써"/>
          <button>눌러</button>
      </form>
      <hr/>
      <hr></hr>
      {toDos.map((item)=><li>{item}</li>)}
    </div>
  );
}

export default App;
