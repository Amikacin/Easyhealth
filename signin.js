import React from 'react'
import '../auth/style+/style.css'
import Image from '../auth/image/dronedelivery.jpg'


function Signin() {
    return (
        <div className="body">
            <div className="leftside">
               <h2 className="login_header">Welcome to EasyHealth</h2>
               <p className="first">Blood is delivered to you in minutes...Emergency request is handled <br/>by the fastest means of transportation.</p>
               <div>
                <img src={Image}  alt="" />
               </div>
            </div>
           
            <div className="rightside">
                 <h3>Login</h3>
                <div className="form">
                <form>
                    <div className="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Enter Email Address"/>
                    </div>
                    <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"  placeholder="Enter Password"/>
                    </div>
                    <button type="button" clasName="btn">LOG IN</button>
                    </form>
                </div>       
                <div className="buttom">
                    <p>Don't have an account yet? <span>sign in</span> </p>
                    <p>forgot password?</p>
                </div>
                </div>
        </div>
    )

}
export default Signin
