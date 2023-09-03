import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";
import './Login.css';
import { Link } from 'react-router-dom';

import axios from './api/axios';
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            console.log('Access Token:', accessToken);

            // After a user logs in and the server responds with an access token
            localStorage.setItem('accessToken', accessToken);

            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
    
    return (
        <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                    <a href="/">Go to Home</a>
                </p>
            </section>
        ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : 
            "offscreen"} aria-live="assertive">{errMsg}</p>

            <h1 className='Heading'>Sign In</h1>

            <form className='Field' onSubmit={handleSubmit}>

                <label htmlFor="username">Username:</label>

                    <input className='Inputs'
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="on"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    />

                <label htmlFor="password">Password:</label>
                    <input className='Inputs'
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    />

                <button className='btn'>Sign In</button>

            </form>
            
            <div>
                <p className='New'>
                Need an Account?</p><br />

                <span className="line">
                    {/*put router link here*/}
                    <div style={{marginBottom: "80px"}}>
                        <Link to="/Register">
                            <button className='signup'>Sign Up</button>
                        </Link> 
                    </div>
                </span>
            </div>

    </section>
        )}
        </>
    )
}

export default Login