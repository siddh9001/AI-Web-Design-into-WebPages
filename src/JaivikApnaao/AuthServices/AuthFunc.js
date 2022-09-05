import axios from "axios";
import React, {useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

export const useProvideAuth = () => {

    const [isLogin, setIsLogin] = useState(false);
    const [userData, setUserData] = useState({});

    console.log("Userlogin jaivikAppnaao : ", isLogin);
    console.log("userdata jaivikAppnaao : ", userData);

        const signin =  (inputs) => {
          console.log("AuthFunc Inputs : ", inputs);
            (async () =>{
                await axios.post('http://localhost:5000/api/auth/login', inputs)
                    .then((result) => {
                      const token = result.data.token
                      localStorage.setItem('user', JSON.stringify(token));
                      console.log(token);
        
                      (async () =>{
                        const loginToken = {
                          headers: {
                          'Authorization': token,
                          },
                        }
                        await axios.get('http://localhost:5000/api/auth/profile', loginToken)
                          .then((result) => {
                            console.log("user: ", result);
                            setIsLogin(true);
                            setUserData(result.data);
                          }).catch((err) => {
                            console.log(err.message);
                          });
                      })();
                      
                    }).catch((err) => {
                      console.log(err.message);
                    });
              })();

        }

        const signup = () => {

        }

        const signout = () => {
            localStorage.removeItem('user');
            setUserData({});
            setIsLogin(false);
        }

        return {
            isLogin,
            userData,
            setIsLogin,
            setUserData,
            signin, 
            signup,
            signout,
        }
};

export default useProvideAuth;
