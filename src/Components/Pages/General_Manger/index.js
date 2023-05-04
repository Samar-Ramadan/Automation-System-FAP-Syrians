import React from "react";
import {Routes, Route } from "react-router-dom";
import {Getbranches} from "./Codes/Branches/index";
import Editbranches from "./Codes/Branches/update";
import {GetClassRoom} from "./Codes/ClassRooms/index";
import GetRecordEmployee from "./ControlPanel/RecordEmployee/index";
import {AddClass} from "./Codes/ClassRooms/add";
import {EventsTwo } from "./Reports/Popular_Branches/index";
import Survey from "./Survey/index";
import NavBar from "../LayOut/NavBar";
import SideBar from "../LayOut/SideBar";
import {SidebarData} from './SidebarData'

function index () {

  return (
    <>
      <NavBar/>
      <SideBar SidebarData={SidebarData} />
      <Routes>
   
        <Route path='/Branches/index' element={<Getbranches/>} /> 
        <Route path='/Branches/edit:id' element={<Editbranches/>} /> 
        <Route path='/ClassRoom/index' element={<GetClassRoom/>} /> 
        <Route path="/ClassRoom/create" element={<AddClass/>}/>
        <Route path='/Survey' element={<Survey/>} />
        <Route path='/ControlPanel/RecordEmployee' element={<GetRecordEmployee/>} />
        <Route path='/events/events2' element={<EventsTwo/>} />
      </Routes>
    </>
  );
}
   
export default index;
