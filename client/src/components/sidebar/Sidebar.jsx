import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar(){
    const [cats,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("http://localhost:5000/api/categories")
            setCats(res.data)
        }
        getCats();
    },[])
  return (
    <div className="sidebar" >
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" 
            alt="" />
            <p>
                Bonjour! Juste un petit gars qui suit son rêve.<br/>
                Profile gồm daily moments và những đam mê nhỏ
            </p>
        </div>
        <div className="sidebarItem" >
            <span className="sidebarTitle">CATELOGIES</span>
            <ul className="sidebarList">
                {cats.map((c)=>(
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>  
                    </Link>
                ))}
            </ul>
        </div>
        <div className="sidebarItem" >
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-solid fa-square-envelope"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </div>
        </div>
    </div>
  )
}
