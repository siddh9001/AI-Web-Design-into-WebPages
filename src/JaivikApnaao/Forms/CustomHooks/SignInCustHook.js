import React, {useState} from "react";

const useSignInForm = (callback) =>{
    const [inputs, setInputs] = useState({});

    //if the signUp form is submitted 
    const SignInFormSubmit = (event) => {
        if(event) event.preventDefault();
        callback();
    }

    //if input values of signup form is changed
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