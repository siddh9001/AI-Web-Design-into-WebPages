import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthFunc = (props) => {
  // const navigate = useNavigate();
  // const signin = () => {
  //   (async () =>{
  //       await axios.post('http://localhost:5000/api/auth/login', inputs)
  //           .then((result) => {
  //             props.setToken = result.data.token;
  //             console.log(props.token);

  //             (async () =>{
  //               const loginToken = {
  //                 headers: {
  //                 'Authorization': props.token,
  //                 },
  //               }
  //               await axios.get('http://localhost:5000/api/auth/profile', loginToken)
  //                 .then((result) => {
  //                   console.log("user: ", result);
  //                   props.setIsLogin(true);
  //                   props.userdata(result.data);
  //                   navigate('/');
  //                 }).catch((err) => {
  //                   console.log(err.message);
  //                 });
  //             })();
              
  //           }).catch((err) => {
  //             console.log(err.message);
  //           });
  //     })();
  // }
};

export default AuthFunc;
