import React from 'react';
import {Avatar} from "@material-ui/core";
import './Sidebar.css';
import {useSelector} from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem=(topic)=>(
        <div className="sidebar__recentitem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>{user.displayName}</h2>  
                <h4>{user.email}</h4>  
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statnumber">106</p>    
                </div>
                <div className="sidebar__stat">
                    <p>Post Views</p>
                    <p className="sidebar__statnumber">601</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem('react.js')}
                    {recentItem('webdesign')}
                    {recentItem('developer')}
                    {recentItem('programming')}
                </div>
        </div>
    )
}
export default Sidebar
