import {Link} from "react-router-dom";
import React from "react";
import main_logo from './logo_white.png'
import search_icon from './search_icon_b.png'
// import profile_pic from '../profile_pic (1).png';
import project_1 from './project_1.jpg';
import project_2 from './project_2.jpg';
import project_3 from './project_3.jpg';

function Contact(){
    return (
        <div>
        <div className="navbar">

            <img src={main_logo} alt="" className="logo"/>
            <ul>
               <li> <Link to = {"/"} className="link"> Home </Link></li>
               <li><Link to = {"/about"} className="link"> About me </Link></li>
               <li><Link to = {"/projects"} className="link"> Projects </Link></li>
               <li><Link to = {"/services"} className="link"> Services </Link></li>
               <li><Link to = {"/contact"} className="link"> Contact me </Link></li>
           </ul>

            <div className="search-box">
                <input type="text" placeholder="Search"/>
                <img src={search_icon} alt="" className="search"/>
            </div>    

        </div>

        <div>
            <h3 className="project_header"> 
                My Contact Information
            </h3>
        </div>
        
        <div className="normal_text">
            Email: kwameapenk@gmail.com
            </div>

            <div className="normal_text">
            Phone No.: +1 437 937 7268
            </div>

            <div className="normal_text">
            LinkedIn: www.linkedin.com/in/kwamina-apenkwah
            </div>
        </div>
            
    );
}

export default Contact;