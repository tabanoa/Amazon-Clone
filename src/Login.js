import React, {useState}  from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import {auth} from "./firebase"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //Login firebase authentication etc...
    }
    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authentication)=> {
                //succesfully create a new user with email and password
                console.log(auth);
            })
            .catch((error) => alert(error.message))

        //Login firebase authentication etc...
    }

    return (
        <div className="login">
             <Link to='/'>
                <img className="login_logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        
                    <button types='submit' onClick={signIn}
                     className='login_signInButton'>Sign In</button>
                </form>

                    <p>
                        By signing in you agree to AMAZON FAKE 
                        CLONE Conidtions of Use & Sale. Please 
                        see our Privacy Notice, our Cookies Notice
                        and our Interest-Based Ads Notice.
                    </p>
                    <button types='submit' onClick={register}
                    className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
