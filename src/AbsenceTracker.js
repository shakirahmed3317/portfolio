import React from 'react';
import './AbsenceTracker.css';

const AbsenceTracker = () => {
  return (
    <div className="absence-tracker">
        <div className="header">
            <h1>Absence Tracker</h1>
        </div>
        <div className="auth-container">
            <h2>Login / Sign Up</h2>
            <form className="auth-form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="button" className="btn btn-secondary">Sign Up</button>
            </form>
         
        </div>
    </div>
  );
};

export default AbsenceTracker;
