import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';


export default function Login() {
    //Used for dispatching actions to the global state (store.js).
    const dispatch = useDispatch();

    //Values of the username and password input boxes
    const [loginContainerState, setLoginContainerState] = useState({
        userNameInput: "",
        passwordInput: ""
    });

    //Handles changes in the input boxes (Saves user input to the React State manager)
    //e is the event that is accociated with the input box that the user is inputting/using
    //make sure to keep the name attribute of html element the same as the key in state object
    const handleChange = (e) => {
        const value = e.target.value;
        setLoginContainerState({
            ...loginContainerState,
            [e.target.name]: value
        });
    };

    //Login authorization code
    const authorize = async (e) => {
        //prevents the browser from performing its default behavior when a form is submitted.
        //prevent page from refreshing
        e.preventDefault();
        //Retrieve the user data from the server and store it in the global state. See store.js for how this happens.
            //dispatch(loginUser({username: loginContainerState.userNameInput, password: loginContainerState.passwordInput}));
    };

    return (
        <div className="">
            <h1 className="">Login</h1>
            
            <form className="" action="#" onSubmit={authorize}>
                <div className="">
                    <label htmlFor="userNameInput">
                        Username
                    </label>
                    <input 
                        type="text"
                        placeholder="Username"
                        name="userNameInput"
                        value={loginContainerState.userNameInput} 
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="">
                    <label htmlFor="passwordInput">
                        Password
                    </label>
                    <input 
                        type="password"
                        placeholder="Password"
                        name="passwordInput"
                        value={loginContainerState.passwordInput}
                        onChange={handleChange}
                        required 
                    /> 
                </div>
            
                <div className="">
                    <button className="formButton" type="submit" value="Log in">
                        Log In
                    </button>
                </div>
            </form>
            <div className="" href="#">
                <Link to="/forgot-password">Forgot password?</Link>
            </div>
            
            <Link className="" to="/register">Create a new account</Link>
        </div>
    );
}