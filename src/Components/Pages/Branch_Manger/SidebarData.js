import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
  {
    title: "الترميزات",
    
    path: "/about-us",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      
      {
        title: "القاعات",
        path: "/ClassRoom/index",
        icon: <IoIcons.IoIosPaper />,
      },{
        title: "القاعات",
        path: "/Trainer_Management/index",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];