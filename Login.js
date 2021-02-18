import React,{useState} from 'react';
import { auth } from './firebase';
import {useDispatch} from 'react-redux';
import {login} from "./features/userSlice";
import './Login.css';
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const dispatch = useDispatch();

    const logintoapp=(e)=>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then((userAuth) =>{
            dispatch(
                login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                })
            );
        }).catch((error) => alert(error));
    };

    const register=()=>{
        if(!name){
            return alert="enter name";
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    })
                );
            });
        }).catch((error) =>alert(error));
    };

    return (
        <div className="login">
            <img src="https://linkedin.github.io/career-explorer/assets/images/logo.png" 
            alt=""/>
            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder='enter full name' type="text"/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter email"type="text"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter password" type="password" name="" id=""/>
                <button type="submit" onClick={logintoapp}>Sign In</button>
            </form>
            <p>Not a member?{" "}
            <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
