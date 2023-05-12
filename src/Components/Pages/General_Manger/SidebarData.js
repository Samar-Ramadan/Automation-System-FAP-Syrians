import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
  {
    title: "الترميزات",
    icon: <AiIcons.AiFillHome />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "الفروع",
        path: "/Branches/index",
        icon: <IoIcons.IoIosPaper />,
      },
  
    ],
  },
  {
    title:  "التقارير",
    icon: <IoIcons.IoIosPaper />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "حول الفروع",
        path: "/services/services1",
        icon: <IoIcons.IoIosPaper />,
        
      },
      {
        title: "حول الدورات",
        path: "/services/services2",
        icon: <IoIcons.IoIosPaper />,
        
      },
      {
        title: "حول تقييمات المدربين",
        path: "/services/services3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "الأستطلاع",
    path: "/Survey",
    icon: <FaIcons.FaPhone />,
    
  },
  {
    title: "لوحة التحكم",
    icon: <FaIcons.FaEnvelopeOpenText />,
 
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "تسجيل مدراء الفروع",
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