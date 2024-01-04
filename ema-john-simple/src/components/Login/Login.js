
import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';




function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''

  })

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        handleResponce(res, true);
      })
  }

  const fbSignIn = () => {
    handleFbSignIn()
      .then(res => {
        handleResponce(res, true);
      })
  }

  const signOut = () => {
    handleSignOut()
      .then(res => {
        handleResponce(res, false);
      })
  }

  const handleResponce = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFormValid = true;
    // console.log(event.target.name, event.target.value);
    if (e.target.name === 'email') {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;

    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (e) => {
    if (newUser && user.name && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponce(res, true);
        })

    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponce(res, true);
        })
    }
    e.preventDefault();
  }



  return (
    <div style={{ textAlign: 'center' }}>
      {
        user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
          <button onClick={googleSignIn}>Sign In</button>

      }
      <br />
      <button onClick={fbSignIn}>Sign in using facebook</button>



      {
        user.isSignedIn && <div>
          <p> Welcome, {user.name}</p>
          <p>Your Email: {user.email}</p>
          <img src={user.photo} alt=""></img>
        </div>
      }


      <h1>Our own Authentication</h1>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" />
      <label htmlFor="newUser">New User Sign up</label>

      {/* <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p> */}
      <form action="" onSubmit={handleSubmit}>
        {newUser && <input name="name" onBlur={handleBlur} type="text" placeholder="Your name" />}
        <br />
        <input type="text" onBlur={handleBlur} name="email" placeholder="Your email address" required />
        <br />
        <input type="password" onBlur={handleBlur} name="password" placeholder="Your password" required />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: 'red' }}>{user.error}</p>
      {
        user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>
      }
    </div>
  );
}

export default Login;
