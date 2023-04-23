import "../Css/General_Manager.css";
import Sidebar from "./Layout/Sidebar";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import {Getbranches} from "./Codes/Branches/index";
import Editbranches from "./Codes/Branches/update";
import {GetClassRoom} from "./Codes/ClassRooms/index";
import GetRecordEmployee from "./ControlPanel/RecordEmployee/index";
import {AddClass} from "./Codes/ClassRooms/add";
import { Events, EventsOne, EventsTwo } from "./Reports/Popular_Branches/index";
import Survey from "./Survey/index";
function index() {
  return (
    <>
      <Sidebar />
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
