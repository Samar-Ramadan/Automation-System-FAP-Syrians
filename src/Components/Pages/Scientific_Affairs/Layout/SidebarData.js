import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
  {
    title: "الترميزات",
    
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      
      {
        title: "القاعات",
        path: "/ClassRoom/index",
        icon: <IoIcons.IoIosPaper />,
      },
      // {
      //   title: "القاعات",
      //   path: "/Trainer_Management/index",
      //   icon: <IoIcons.IoIosPaper />,
      // },
    ],
  },
  {
    title: "ادارة المحتوى",
    
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      
      {
        title: "المواد",
        path: "/Management_Content/index",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "لوحة التحكم",
    icon: <FaIcons.FaEnvelopeOpenText />,
 
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "تسجيل الموظفين",
        path: "/ControlPanel/RecordEmployee",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Event 2",
        path: "/events/events2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];