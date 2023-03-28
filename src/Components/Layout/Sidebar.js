import React from "react";
import { Link ,NavLink } from "react-router-dom";
function Sidebar(){
    return(
        <div>
            <ul className="SidebarList">
                <li><NavLink className="nav" exact to="/Codes">codes</NavLink></li>
                <li><NavLink className="nav" to="/create">create</NavLink></li>
                 
                 
            </ul>
        </div> 
    )
}
export default Sidebar;