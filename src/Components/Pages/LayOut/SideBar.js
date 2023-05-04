import React, { useState } from "react";
import {SidebarNav,SidebarWrap} from "./Css/Styled_SideBar";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import avatar from './Css/download.jpg';

const SideBar = (props) => {
  const [sidebar, setSidebar] = useState(true);


  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>

   

        <SidebarNav sidebar={sidebar} >
        
          <SidebarWrap>
          {/* <div className="text-center">
               <img src={avatar} alt="Avatar" className="avatar"  style={{height:'3%'}}/>
          </div> */}
          <br />
          <br />
          <br />
            {props.SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>


      </IconContext.Provider>
    </>
  );
};


export default SideBar;