import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Forms/SignIn';
import SignUp from './Forms/SignUp';
import Home from './Home';
import Header from './HomePageComponents/Header';
import Products from './Products';
import Videos from './Videos';
import ContactUs from './ContactUs';
import { useEffect, useState } from 'react';


function JaivikApnaoHome() {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({});
  // const [token, setToken] = useState("");

  // useEffect((e) => {
    // e.preventDefault();
  console.log(isLogin);
  console.log(userData);
  // }, [isLogin]);
  
  return (
    <>
      <Router>
      <Header islogin={isLogin} setIsLogin={setIsLogin} userdata={userData}/>
        <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route path='/products' element={<Products/>} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/sign-in' element={<SignIn islogin={isLogin} setIsLogin={setIsLogin} userdata={setUserData}/>}/>
        <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default JaivikApnaoHome;
