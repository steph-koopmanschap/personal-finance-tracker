import React, {useState} from 'react';
import {Link} from "react-router-dom";

export default function ForgotPassword() {

    const handleChange = (e) => {
        const value = e.target.value;
    };

    //Reset authorization
    const passwordReset = (e) => {
        //prevent page from refreshing
        e.preventDefault();

        //Add reset code here
    };

    return (
        <div>
            <h1 className="">Password reset</h1>
            <form className="" action="#" onSubmit={passwordReset}>
            </form>
                <input className=""
                    type="submit" 
                    value="Send" 
                />
            <div className="">
                <Link to="/">Go back</Link>
            </div>
        </div>
    )
}
