import {Routes, Route } from "react-router-dom";
import {GetClassRoom} from "./Codes/ClassRooms/index";
import Trainer_Management from "./Trainer_Management/index";

import NavBar from "../LayOut/NavBar";
import SideBar from "../LayOut/SideBar";
import {SidebarData} from './SidebarData'

function index() {
   
  return (
    <>
      <NavBar/>
      <SideBar SidebarData={SidebarData}/>
      <Routes>
        <Route path='/ClassRoom/index' element={<GetClassRoom/>} /> 
    
        <Route path='/Trainer_Management/index' element={<Trainer_Management/>} /> 
      </Routes>
    </>
  );
}
   
export default index;
