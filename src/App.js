import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import Header from './Header';

function App() {
  return (<>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
  </Routes>
  </>
  );
}

export default App;
