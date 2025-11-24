import React, { useContext, useState } from 'react'
import classes from './signUp.module.css'
import { Link, useNavigate} from 'react-router-dom'
import {auth} from '../../utility/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {DataContext} from "../../components/dataProvider/DataProvider"
import { Type } from '../../utility/action.type'
import { ClipLoader } from 'react-spinners'

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
const [Loading, setLoading] = useState({
signIn:false,
signUp:false
})

  const [{user}, dispatch] = useContext(DataContext)
  const navigate = useNavigate()
  // console.log(email, password)
  console.log(user)
  const authHandler = async(e)=>{
    e.preventDefault()
    console.log(e.target.name)
     
    if (e.target.name == "signin") {
setLoading({...Loading, signIn:true})
      //firebase auth
      signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        
         dispatch({
           type: Type.SET_USER,
           user: userInfo.user,
         });
         setLoading({ ...Loading, signIn: false });
         navigate('/')
        }).catch((err)=>{
          setError(err.message);
          setLoading({ ...Loading, signIn: false });
       
       
      })

      
    }else{
       setLoading({ ...Loading, signUp: true });
       createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{
         
         dispatch({
           type: Type.SET_USER,
           user: userInfo.user,
          });
          setLoading({ ...Loading, signUp: false });
           navigate("/");
        }).catch((err)=>{
          setError(err.message)
          setLoading({ ...Loading, signUp: false });
      
        
      })
    }
  }
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png?20250504041148"
          alt=""
        />
      </Link>
      {/* form */}

      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form action="#">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            name="signin"
            type="submit"
            onClick={authHandler}
            className={classes.login__signInButton}
          >
            {Loading.signIn ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              " Sign In"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of Use &
          Sale. Plaese see our privacy Notice, our Cookies Notice and our
          Interest Based Ads Notice.
        </p>

        {/* create account button */}
        <button
          name="signup"
          type="submit"
          onClick={authHandler}
          className={classes.login__registerButton}
        >
          {Loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            " Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth
