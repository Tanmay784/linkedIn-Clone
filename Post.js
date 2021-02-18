import React ,{forwardRef} from 'react';
import './Post.css';
import {Avatar} from "@material-ui/core";
import InputOptions from './InputOptions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

const Post= forwardRef(({name,description,message,photourl},ref) =>{
    return (
        <div ref={ref}className='post'>
            <div className="post__header">
                <Avatar/>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__button">
                <InputOptions Icon={ThumbUpIcon} 
                title='Like' color='gray'/>
                 <InputOptions Icon={ChatBubbleOutlineIcon} 
                title='Chat' color='gray'/>
                 <InputOptions Icon={ShareIcon} 
                title='Share' color='gray'/>
                 <InputOptions Icon={SendIcon} 
                title='Send' color='gray'/>
            </div>
        </div>
    )
}
)

export default Post
