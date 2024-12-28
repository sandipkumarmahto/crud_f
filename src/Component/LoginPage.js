import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

function LoginPage(){
    
    const [credentials, setCredential]=useState();
    function inputHandler(e){
        setCredential({...credentials,[e.target.name]:e.target.value})
    }
    const navigate=useNavigate();
    
    function confirmLogin(e){
        e.preventDefault();
        axios.post("http://localhost:3500/user/login".credentials)
        .then(res =>{
            console.log(res)
            navigate("/")
        })
        .catch(err =>{
            console.log(err)
            alert("something error occured in login")
        })
    }

    return(
        <>
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card shadow-lg p-4" style={{ maxWidth: 400, width: "100%" }}>
                <h3 className="text-center mb-4">Login</h3>
                <form onSubmit={confirmLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                    Email address
                    </label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={credentials?.email}
                    onChange={inputHandler}
                    placeholder="Enter your email"
                    required="true"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                    Password
                    </label>
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={credentials?.password}
                    onChange={inputHandler}
                    placeholder="Enter your password"
                    required="true"
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">
                    Remember Me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Login
                </button>
                </form>
                <p className="text-center mt-3">
                Don't have an account? <Link to="/register">Sign up</Link>
                </p>
            </div>
        </div>

        </>
    )
}

export default LoginPage;
