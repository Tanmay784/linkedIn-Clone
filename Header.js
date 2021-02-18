import React from 'react';
import "./Header.css";
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import {useDispatch} from 'react-redux';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from './firebase';
import {logout} from './features/userSlice';
function Header() {
    const dispatch = useDispatch();
    const logoutofapp = () =>{
        dispatch(logout())
        auth.signOut();
    };
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt=""/>
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>

            </div>

           <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption avatar="https://i.pinimg.com/280x280_RS/11/8b/1a/118b1acf25be8e7e6d1eb7916d1c270d.jpg" title="me"
                onClick={logoutofapp}
                />
           </div>
        </div>
    )
}

export default Header
