import "./sidebar.css"

export default function Sidebar(){
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
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">Tech</li>
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
