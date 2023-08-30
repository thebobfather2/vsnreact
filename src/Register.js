import { useRef, useState, useEffect } from "react";
import axios from './api/axios';
import './Register.css';
import { Link } from 'react-router-dom';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [dataArray, setDataArray] = useState([]);

    const [user, setUser] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [email, setEmail] = useState('');

    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
          setErrMsg("Invalid Entry");
          return;
        }
        try {
          const response = await axios.post(
            REGISTER_URL,
            JSON.stringify({ user, pwd }),
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          );
          setSuccess(true);
          setDataArray((prevDataArray) => [
            ...prevDataArray,
            {
              user: user,
              pwd: pwd,
              firstName: firstName,
              lastName: lastName,
              email: email
            },
          ]);
          setPwd("");
          setMatchPwd("");
        } catch (err) {
          if (!err?.response) {
            setErrMsg("No Server Response");
          } else if (err.response?.status === 409) {
            setErrMsg("Username Taken");
          } else {
            setErrMsg("Registration Failed");
          }
          errRef.current.focus();
        }
      };
      
    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                    <Link to="/Login">Sign In</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className="Heading">Register</h1>
                    <form className="Field" onSubmit={handleSubmit}>

                        <label htmlFor="firstName">
                            First Name:
                        </label>
                        <input
                            className="Input"
                            type="text"
                            id="firstName"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            required
                        />

                        <label htmlFor="firstName">
                            Last Name:
                        </label>
                        <input
                            className="Input"
                            type="text"
                            id="lastName"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            required
                        />

                        <label htmlFor="username">
                            Username:
                            </label>
                        <input className="Input"
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <div className="Note">
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                         
                            4 to 24 characters.
                            Must begin with a letter
                            Letters, numbers, underscores, hyphens allowed.<br />
                            <br />
                            
                        </p>
                        </div>

                        <label htmlFor="email">
                            Email:
                            </label>
                            <input
                            className="Input"
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            />


                        <label htmlFor="password">
                            Password:
                       
                        </label>
                        <input className="Input"
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                         
                            8 to 24 characters.
                            Must include uppercase and lowercase letters, a number and a special character.
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            <br />
                            <br />
                        </p>


                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                          
                        </label>
                        <input className="Input"
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                          
                            Must match the first password input field. <br />
                            <br />
                        </p>

                    <button className="signup" disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                    </form> 
                    <br />
                    <br />
                    <br />
                    <div className="already">
                    <p className='New'>
                        Already registered?</p><br />
                        <span className="line">
                            {/*put router link here*/}
                            <div style={{marginBottom: "80px"}}>
                        <Link to="/Login">
                            <button className='signup'>Sign In</button>
                        </Link> 
                            </div>
                        </span>
                        </div>
                </section>
           ) }
        </>
    )
}

export default Register