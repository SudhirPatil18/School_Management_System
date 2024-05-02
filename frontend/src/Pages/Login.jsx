import React, { useState } from 'react';
import "./pages.css"
import "./Register"
function Login() {
    const [accountType, setAccountType] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (accountType === "admin") {
            // Check admin credentials
            if (username === "admin" && password === "adminpass") {
                window.location.href = "admin.html";
            } else {
                setError("Invalid admin credentials");
            }
        } else if (accountType === "student") {
            // Check student credentials
            if (username === "student" && password === "studentpass") {
                window.location.href = "student.html";
            } else {
                setError("Invalid student credentials");
            }
        }
    };

    return (
        <div className="login-form">
            <form>
                <h2 className="text-center">Log in</h2>
                <div className="form-group">
                    <label><b>Account Type:</b></label>
                    <select className="form-control" value={accountType} onChange={(e) => setAccountType(e.target.value)} required>
                        <option value=""></option>
                        <option value="admin">Admin</option>
                        <option value="student">Student</option>
                    </select>
                </div>
                <div className="form-group">
                    <label><b>User Name:</b></label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                </div>
                <div className="form-group">
                    <label><b>Password:</b></label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>Log in</button>
                </div>
                {error && <p>{error}</p>}
                <div className="clearfix">
                    <a href="#" className="float-right"><b>Forgot Password?</b></a>
                    <a href="register"><b>Create an Account</b></a>
                </div>
            </form>
        </div>
    );
}

export default Login;
