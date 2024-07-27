// import React from 'react';
// import './Login.css';
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from './firebase';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// function Login(props) {
//   const navigate = useNavigate();

//   function signin() {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const user = result.user;
//         const username = user.displayName;
//         const email = user.email;
//         console.log(username, email);
//         props.setLoggedIn(true);

//         navigate("/");
//       })
//       .catch((error) => {
//         console.error("Error signing in with Google: ", error);
//       });
//   }

//   return (
//     <div className="login">
//       <button onClick={signin} type="button" className="btn btn-primary">
//         Sign in with Google
//       </button>
//     </div>
//   );
// }

// export default Login;







// import React, { useState } from 'react';
// import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, provider } from './firebase';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';



// function Login(props) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignUp, setIsSignUp] = useState(false);
//   const navigate = useNavigate();

//   const handleGoogleSignIn = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         props.setLoggedIn(true);
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error("Error signing in with Google: ", error);
//       });
//   };

//   const handleEmailSignIn = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         props.setLoggedIn(true);
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error("Error signing in with email: ", error);
//       });
//   };

//   const handleEmailSignUp = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         props.setLoggedIn(true);
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error("Error signing up with email: ", error);
//       });
//   };

//   return (
//     <div className="login">
//       <form onSubmit={isSignUp ? handleEmailSignUp : handleEmailSignIn}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit" className="btn btn-primary">
//           {isSignUp ? 'Sign Up' : 'Sign In'}
//         </button>
//       </form>
//       <button onClick={handleGoogleSignIn} type="button" className="btn btn-secondary">
//         Sign in with Google
//       </button>
//       <p>
//         {isSignUp ? 'Already have an account?' : "Don't have an account?"}
//         <span onClick={() => setIsSignUp(!isSignUp)}>
//           {isSignUp ? ' Sign In' : ' Sign Up'}
//         </span>
//       </p>
//     </div>
    
//   );
// }


// export default Login;





import React, { useState } from 'react';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth, provider } from './firebase';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        props.setLoggedIn(true);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in with Google: ", error);
      });
  };

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        props.setLoggedIn(true);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in with email: ", error);
      });
  };

  const handleEmailSignUp = (e) => {
    e.preventDefault();
    if (fullName && mobileNumber) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          result.user.sendEmailVerification();
          props.setLoggedIn(true);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error signing up with email: ", error);
        });
    } else {
      console.error("Please provide full name and mobile number.");
    }
  };

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent.");
      })
      .catch((error) => {
        console.error("Error sending password reset email: ", error);
      });
  };

  return (
    <div className="login-wrapper">
      <div className="login">
        {forgotPassword ? (
          <div>
            <h2>Reset Password</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button onClick={handlePasswordReset} className="btn btn-primary">
              Send Reset Link
            </button>
            <p>
              <span onClick={() => setForgotPassword(false)}>
                Back to {isSignUp ? 'Sign Up' : 'Sign In'}
              </span>
            </p>
          </div>
        ) : (
          <div>
            <form onSubmit={isSignUp ? handleEmailSignUp : handleEmailSignIn}>
              {isSignUp && (
                <>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                </>
              )}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </form>
            <button onClick={handleGoogleSignIn} type="button" className="btn btn-secondary">
              Sign in with Google
            </button>
            <p>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <span onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? ' Sign In' : ' Sign Up'}
              </span>
            </p>
            {!isSignUp && (
              <p>
                <span onClick={() => setForgotPassword(true)}>
                  Forgot Password?
                </span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;

