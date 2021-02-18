import React,{useState,useEffect} from 'react';
import './Feed.css';
import ImageIcon from '@material-ui/icons/Image';
import InputOptions from './InputOptions';
import CreateIcon from '@material-ui/icons/Create';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import {useSelector} from 'react-redux';
import firebase from 'firebase';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
function Feed() {
    const user=useSelector(selectUser);

    const [input,setInput]=useState('');
    const [post,setPost]=useState([]);

    useEffect(()=>{
        db.collection("post").orderBy('timestamp','desc').onSnapshot((snapshot)=>
        setPost(snapshot.docs.map((doc) =>    ({
            id: doc.id,
            data: doc.data(),
        }))
        )
    );
    },[]);

    const sendPost=(e)=>{
        e.preventDefault();
        db.collection('post').add({
            name:user.displayName,
            description:user.email,
            message:input,
            photourl:'',
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    };
    return (
        <div className="feed">
            <div className="feed__inputcontainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form action="">
                        <input value={input} onChange={e =>setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                    <div className="feed__inputoptions">
                    <InputOptions Icon={ImageIcon} title="Image" color='70b5f9'/>
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color='#e7a33e'/>
                    <InputOptions Icon={EventNoteIcon} title="Event" color='#c0cbcd'/>
                    <InputOptions Icon={CalendarViewDayIcon} title="Write article" color='7fc15e'/>
                 </div>
            </div>
            <FlipMove>
            {post.map(({id,data:{name,description,message,photourl}})=>(
            <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photourl={photourl}
                    />))}
           </FlipMove>
        </div>
    )
}

export default Feed
