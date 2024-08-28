import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const auth = getAuth(); // Correctly call getAuth as a function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      navigate('/'); // Redirect to home after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='authContainer'>
      <h1>Login</h1>
      <p>{error}</p>

      <form onSubmit={login}>
        <label htmlFor="email">Email</label>
        <input
          type='email'
          placeholder='Enter email...'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type='password'
          placeholder='Enter password...'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit'>Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Login;
