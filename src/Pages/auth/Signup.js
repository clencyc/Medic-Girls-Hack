import { Link, useNavigate } from 'react-router-dom';
// import '../Styles/Auth.css';
import React, { useState } from 'react';
import '../../Styles/Signup.css'

import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { db } from '../../configs/firebase'
import {doc, setDoc} from 'firebase/firestore'


function Signup() {
  const auth = getAuth()

  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user.uid;
      await setDoc(doc(db, 'users', user), {
        name: Name,
        email: email
      });
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  }
  
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      navigate('/login');
    } catch (error) {
      console.error("Error during Google sign-in: ", error);
      setError(`Google sign-in failed: ${error.message}`);
    }
  };

  return (
    <div className='authContainer-sign'>
      <div className="card">
      <p>{error}</p>

      <form onSubmit={submit} className='form'>

      <h1>Sign Up</h1>


        <label htmlFor="name" >Name
        <input type='text' placeholder='Enter name...' name="name" required
          onChange={(e) => setName(e.target.value)} />
          </label>

        <label htmlFor="email">Email
        <input type='email' placeholder='Enter email...' name="email" required
          onChange={(e) => setEmail(e.target.value)} />
          </label>

           <label htmlFor="password">Phone
        <input type='number' placeholder='Enter phonenumber...' name="phonenumber" required
          onChange={(e) => setPassword(e.target.value)} />
          </label>



        <label htmlFor="password">Password

        <input type='password' placeholder='Enter password...' name="password" required
          onChange={(e) => setPassword(e.target.value)} />
          </label>

          
        <button className='btn' type='submit'>Sign Up</button>

        <button type='button' onClick={signInWithGoogle} className='googleButton'>
          <FcGoogle /> Or signup with Google
        </button>
      </form>
      <p className='log'>Already have an account? <Link className='link' to="/login">Login</Link></p>
    </div>

    </div>
  )
}

export default Signup;