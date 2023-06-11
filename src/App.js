// import logo from './logo.svg';
import './App.css';
import AppHw from './comps/appHw';
import ShopList from './comps_loop/shopList';

function App() {
 return(
  // <React.Fragment>
  <>
    <h1 className='text-danger'>React</h1>
    <hr/>
    <AppHw/>
    <hr/>
  <ShopList/>
    </>
  // </React.Fragment>
 )
}

export default App;
