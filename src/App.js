 import logo from './logo.svg';
import './App.css';
import Counter from './comps/counter';
import InputVal from './comps/inputVal';
import Message from'./comps/message'

function App() {
  return (

<div className='countainer'>
  <h1 className='text-denger'>React</h1>
  <Message txt="first"/>
  <InputVal />
  <Counter />
</div>

  );
}

export default App;
