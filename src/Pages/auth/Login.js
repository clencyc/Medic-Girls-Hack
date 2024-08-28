import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '../../Styles/Login.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



function Login() {
  const auth = getAuth(); // Correctly call getAuth as a function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isPasswordShown, setIsPasswordShown] = useState(false);


  const login = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      navigate('/resources'); // Redirect to home after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='authContainer'>
      <div className="card">
      <p>{error}</p>

      <form onSubmit={login} className='form'>
      <h1>Login</h1>

        <label htmlFor="email">Email
        <input
          type='email'
          placeholder='Enter email...'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        </label>

        <label htmlFor="password">Password
        <input
          name ='password'
          type={isPasswordShown ? 'text' : 'password'}
          placeholder='Enter password...'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
         <p className='visibility' onClick={() => setIsPasswordShown(!isPasswordShown)}>
          {isPasswordShown ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </p>
        </label>

        <button  className='btn' type='submit'>Login</button>
      </form>
      <p className='log'>Don't have an account? <Link  className='link' to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;
