import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Forms/SignIn";
import SignUp from "./Forms/SignUp";
import Home from "./Home";
import Header from "./HomePageComponents/Header";
import Products from "./Products";
import Videos from "./Videos";
import ContactUs from "./ContactUs";
import { ProvideAuth } from "./AuthServices/AuthFunc";

function JaivikApnaoHome() {
  return (
    <>
      
        <ProvideAuth>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Router>
          </ProvideAuth>
    </>
  );
}

export default JaivikApnaoHome;
