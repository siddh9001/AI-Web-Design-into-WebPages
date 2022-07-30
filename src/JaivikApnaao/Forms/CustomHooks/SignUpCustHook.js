import React, {useState} from "react";

const useSignUpForm = (callback) =>{
    const [inputs, setInputs] = useState({});

    //if the signUp form is submitted 
    const SignUpFormSubmit = (event) => {
        if(event) event.preventDefault();
        callback();
    }

    //if input values of signup form is changed
    const SignUpFormChange = (event) =>{
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    return {
        inputs,
        SignUpFormSubmit,
        SignUpFormChange,
    }
}

export default useSignUpForm;