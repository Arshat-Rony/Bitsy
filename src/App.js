import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='bg-primary '>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
