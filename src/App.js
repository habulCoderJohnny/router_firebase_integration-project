import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Home/Products/Products';
import Login from './components/Login/Login';
import Order from './components/Orders/Order';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signup from './components/Signup/Signup';
import Review from './Reviews/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/products' element={<RequireAuth>
          <Products/>
        </RequireAuth>}>
        </Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Order/>
          </RequireAuth>
        }></Route>
        <Route path='/reviews' element={<Review/>}></Route>
        <Route path='/signUp' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
