import React, { useState } from 'react';
import "./pages.css";

function Register() {
    const [formData, setFormData] = useState({
        account: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '', // New field for cell phone number
        password: '',
        confirmPassword: '',
        termsAccepted: false
    });

    const [isRegistered, setIsRegistered] = useState(false); // State for success message
    const [passwordMatchError, setPasswordMatchError] = useState(false); // State for password match error

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: val });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

             // Check if password and confirm password match
        if (formData.password !== formData.confirmPassword) {
          setPasswordMatchError(true);
          setTimeout(() => {
              setPasswordMatchError(false);
          }, 5000); // Hide the message after 5 seconds
          return;
        }

        // Simulate form submission success
        // Replace this with actual form submission logic
        setIsRegistered(true);
        setTimeout(() => {
            setIsRegistered(false);
        }, 5000); // Hide the message after 5 seconds
    };

    return (
        <div className="signup-form">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr />
                <div className="form-group">
                    <label htmlFor="account"><b>Account:</b></label>
                    <select className="sign" name="account" value={formData.account} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="Admin">Admin</option>
                        <option value="Student">Student</option>
                    </select>
                    <br /><br />
                    <div className="row">
                        <div className="col"><input type="text" className="form-control" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required /></div>
                        <div className="col"><input type="text" className="form-control" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required /></div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control" name="phoneNumber" placeholder="Phone number" value={formData.phoneNumber} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
                {passwordMatchError && (
                    <div className="alert alert-danger" role="alert">
                        Password and Confirm Password do not match.
                    </div>
                )}
                <div className="form-group">
                    <label className="form-check-label">
                        <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
                    </label>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                </div>
                <div className="hint-text">Already have an account? <a href="login">Login here</a></div>
            </form>
            {isRegistered && (
                <div className="alert alert-success" role="alert">
                    You have successfully registered!
                </div>
            )}
        </div>
    );
}

export default Register;
