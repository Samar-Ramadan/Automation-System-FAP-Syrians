import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
  {
    title: "البطاقات",
    
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "اضافة بطاقة",
        path: "/Cards/index",
        icon: <IoIcons.IoIosPaper />,
      },
      
    ],
  },
  {
    title: "ادارة الطلاب",
    
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "اضافة طالب",
        path: "/ManagementStudent/RecordStudent",
        icon: <IoIcons.IoIosPaper />,
      },
      
    ],
  },
  
];