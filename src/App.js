import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import { Outlet, Route, Routes } from 'react-router-dom';
import Login from './Pages/Shared/Login';
import Footer from './Pages/Shared/Footer';
import Signup from './Pages/Shared/Signup';
import { ToastContainer } from 'react-toastify';
import Loading from './Pages/Shared/Loading';
import { useEffect, useState } from 'react';
import UploadProduct from './Pages/UploadProduct';
import RequireAuth from './Pages/RequireAuth';
import Sellers from './Pages/Sellers';
import DashBoard from './Pages/Dashboard/DashBoard';
import AddedItmes from './Pages/Dashboard/AddedItmes';
import Earnings from './Pages/Dashboard/Earnings';
import Users from './Pages/Users';
import RequireAdmin from './Pages/RequireAdmin';


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, [])
  return (
    <div className='bg-primary '>
      {
        loading === false ? <>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/sellers' element={<Sellers></Sellers>}></Route>
            <Route path='dashboard' element={<RequireAuth><DashBoard></DashBoard>
            </RequireAuth>}>
              <Route index element={<AddedItmes />} />
              <Route path='customeritems' element={<AddedItmes />} />
              <Route path='earnings' element={<Earnings />} />
              <Route path='users' element={<RequireAdmin>
                <Users />
              </RequireAdmin>} />
            </Route>
            <Route path='/upload' element={
              <RequireAuth>
                <UploadProduct></UploadProduct>
              </RequireAuth>
            }></Route>
          </Routes>
          <Footer></Footer>
          <ToastContainer />
        </>
          :
          <Loading type="spokes" color="#EB4B98"></Loading>
      }

    </div>
  );
}

export default App;
