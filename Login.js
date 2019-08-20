import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
class Login extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
      <div className="Login"> 
      <div className="t"><h2> Login </h2></div>
      <form>
      <div>
      Rackf Id : 
      <input type="text" placeholder=" Rackf ID" name="rackf"  maxLength ="7" size="30" required></input>
      </div>
       <div>
         Password :
       <input type="password" placeholder="Password" name="psw" size ="30" required></input>
       </div>
       <br />
       <br />
       <Link to="/SignUp"><button class="button2">Sign Up</button></Link>
       <button class="button1"> Login</button>
      <div>

          
      <Link to="/ForgotPassword"><button class ="button3">Forgot Password</button></Link>
        </div>
      </form>
      </div>
      </div>
    );

    }
  }
      export default Login