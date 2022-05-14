import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Shared/Login';
import Footer from './Pages/Shared/Footer';
import Signup from './Pages/Shared/Signup';
import { ToastContainer } from 'react-toastify';
import { useInView } from 'react-intersection-observer';
import Loading from './Pages/Shared/Loading';


function App() {
  const { ref, inView } = useInView();
  return (
    <div className='bg-primary '>
      <div ref={ref}></div>
      {
        inView ?

          <div>
            <Header></Header>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/home' element={<Home></Home>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/signup' element={<Signup></Signup>}></Route>
            </Routes>
            <Footer></Footer>
            <ToastContainer />
          </div>
          :
          <Loading type="spokes" color="#EB4B98"></Loading>
      }
    </div>
  );
}

export default App;
