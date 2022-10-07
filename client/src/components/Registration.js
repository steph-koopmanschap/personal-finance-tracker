import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios'; // Library for sending HTTP Requests

export default function Registration() {
    //Used for navigating to different routes in the client without buttons
    const navigate = useNavigate();

        //Values of all the input boxes
        const [registrationState, setRegistrationState] = useState({
            userNameInput: "",
            passwordInput: "",
        });

        const handleChange = (e) => {
            const value = e.target.value;
            setRegistrationState({
                ...registrationState,
                [e.target.name]: value
            });
        };

        //Registration action (OnSubmit form)
        const register = async (e) => {
            //prevent page from refreshing
            e.preventDefault();

            let userData = {};
            //Transform the user inputs to the user data
            //The userId, lastLogin, and accountCreationDate will be generated on the server.
            userData = {
                userId: 0,
                username: registrationState.userNameInput,
                password: registrationState.passwordInput,
                accountCreationDate: "0000-00-00",
                lastLoginDate: "0000-00-00", 
                isLoggedIn: false,
            };

            //Registration code (send info to Back-end database)
            try 
            {
                //Ask the server to add a new user to the database || // eslint-disable-next-line
                let createdUser = await axios.post(`http://localhost:3001/api/user/create`, {user: userData});
                
                alert("successfully registered");
                //Send user back to the landing page after registration submit
                navigate("/")
            } 
            catch (error) 
            {
                console.log(error);
                alert("Something went wrong while creating your account.");
            }
        }

        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="">Create a new account</h1>
                <h3 className="">Already registered? <Link className="" to="/">Login here</Link></h3>
                <form className="" action="#" onSubmit={register}>
                <div className="">
                    <label htmlFor="userNameInput">Username</label>
                    <input 
                        type="text"
                        id="userNameInput"
                        placeholder="Username"
                        name="userNameInput"
                        value={registrationState.userNameInput}
                        onChange={handleChange}
                        required 
                        minLength="3"
                        maxLength="25"
                        pattern="[a-zA-Z0-9]+"
                    />
                </div>
                <div className="">
                    <label htmlFor="passwordInput">Password</label>
                    <input 
                        type="password"
                        id="passwordInput"
                        placeholder="Password"
                        name="passwordInput"
                        value={registrationState.passwordInput}
                        onChange={handleChange}
                        required 
                        minLength="3"
                        maxLength="16"
                    /> 
                    </div>  
                    <div className="">
                    <input className="formButton"
                        type="submit" 
                        value="Sign up" 
                    />
                    </div>
                </form>
                <div className=""><Link to="/">Go back</Link></div>
            </div>
        );
}
