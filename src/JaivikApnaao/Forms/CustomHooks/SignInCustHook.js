import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthServices/AuthFunc";

const useSignInForm = () =>{
    const navigate = useNavigate();
    const auth = useAuth();
    const [inputs, setInputs] = useState({});

    //if the signIn form is submitted 
    const SignInFormSubmit = (event) => {
        if(event) event.preventDefault();
        console.log("SignIpHooksInpts : ", inputs);
        auth.signin(inputs);
        navigate('/');
    }

    //if input values of signIn form is changed
    const SignInFormChange = (event) =>{
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    return {
        inputs,
        SignInFormSubmit,
        SignInFormChange,
    }
}

export default useSignInForm;