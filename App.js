import React,{useEffect} from "react";
import {useSelector} from "react-redux";
import Login from './Login';
import Widgets from './Widgets';
// import { Counter } from './features/counter/Counter';
import "./App.css";
import {useDispatch} from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { selectUser ,logout,login} from "./features/userSlice";
import { auth } from "./firebase";
function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() =>{
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //user loggedin
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
        }));
      }else{
        //user loged out
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className="app">
      <Header/>
      {!user ? <Login/>:(
         <div className="app__body">
         <Sidebar/>
         <Feed/>
         <Widgets/>
         </div>
      )}
     
     
    </div>
  );
}

export default App;
