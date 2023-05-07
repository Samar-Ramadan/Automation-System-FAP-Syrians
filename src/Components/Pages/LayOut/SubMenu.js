import React, { useState } from "react";
import {SidebarLink,SidebarLabel,DropdownLink} from './Css/Styled_SubMenu'

import * as AiIcons from "react-icons/ai";
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
 
  const showSubnav = () => setSubnav(!subnav);
 
    return (
      <>
        <SidebarLink
          to={item.path}
          onClick={item.subNav && showSubnav}
          style={{ display: "flex", justifyContent: "space-between" ,textAlign: 'right'}}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
          
            <div>
              {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : item.icon}
            </div>
            

            <SidebarLabel>
              {item.title}
            </SidebarLabel>
          </div>
          <div>
            {item.icon}
            {/* <AiIcons.AiOutlinePlus  style={{ color :"blue" }}/> */}
              </div>
        </SidebarLink>
        {subnav && (
          <div style={{ textAlign: "right" }}>
            {item.subNav.map((item, index) => {
              return (
                <DropdownLink to={item.path} key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{alignItems: "center" }}>
                     
                    <SidebarLabel style={{ marginLeft: "110px" ,textAlign: "right" }}>{item.title}</SidebarLabel>
                  </div>
                  <div>{item.subIcon}</div>
                </DropdownLink>
              );
            })}
          </div>
        )}
      </>
    );
  
};
 
export default SubMenu;