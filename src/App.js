 import logo from './logo.svg';
import './App.css';
import Counter from './comps/counter';
import InputVal from './comps/inputVal';
import Message from'./comps/message'
import Task1 from'./comps/task1'
import Task2 from'./comps/task2'
function App() {
  return (

<div className='countainer'>
  <h1 className='text-denger'>React</h1>
  <Task2/>
  <Task1/>
  <Message txt="first"/>
  <InputVal />
  <Counter />
</div>

  );
}

export default App;
