import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
  {
    title: "إدارة المحتوى العلمي",
    
    
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "المواد العلمية",
        path: "/Subjects/index",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "بنك الأسئلة",
        path: "/QuestionBank/index",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  
];