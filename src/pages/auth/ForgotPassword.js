import React, { useState, useEffect } from "react";
import { auth} from "../../firebase";
import { toast } from "react-toastify";
import {useSelector} from 'react-redux'

const ForgotPassword = ({history}) => {

    const [email, SetEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        //
    };

    return (
        
    <div className="container col-md-6 offset-md-3 p-5">
        {loading ? (
            <h4 className="text-danger">Loading...</h4>
         ):(
            <h4>Forgot Password</h4>
        )}
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                className="form-control" 
                value={email} 
                onChange={(e) => SetEmail(e.target.value)}
                placeholder="Type your Email"
                autoFocus
            />
            <br />
            <button className="btn btn-raised" disabled={!email}>
                Submit
            </button>
        </form>
    </div>

    )
}

export default ForgotPassword
