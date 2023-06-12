// import logo from './logo.svg';
import './App.css';
import AppDate from './comps/appDate';
import AppHw from './comps/appHw';
import AppColor from './comps/comp_color/app_color';
// import ShopList from './comps_loop/shopList';

function App() {
  return (
    <>

      <h1 className='text-danger'>React</h1>
      <hr />
      <AppHw />
      <hr />
      <AppDate />
      {/* <ShopList/>  */}
      <hr />
      <h2>color</h2>
      <AppColor />
    </>
  )
}

export default App;
