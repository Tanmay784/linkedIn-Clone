import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
export default function Widgets() {
    const newsArticle=(heading,subtitle)=>(
        <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon/>
                </div>
                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>

            </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("This web-app was made using react.js and redux")}
            {newsArticle("Programming is fun if you understand the flow")}
            {newsArticle("Being a full stack is hard but can be rewarding")}
            {newsArticle("I hope coronavirus ends quickly")}
            {newsArticle("Wakanda forever")}
            {newsArticle("Tanmay Here")}
        </div>
    )
}
