import React from 'react';
import { Router } from 'react-router-dom';

function Nav()
{
    return (
        <div className="app">
        <div className="place">
            <p align="left" size="60"><a href="/login/admin">Admin</a></p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p align="left" size="60"><a href="/login/trainer">Trainee</a></p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p align="left" size="60"><a href="/login/students">Student</a></p>
        </div>
        
        </div>
    )
}
export default Nav;