import "../Css/General_Manager.css";
import Sidebar from "./Layout/Sidebar";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import {Getbranches} from "./Codes/Branches/index";
import {GetClassRoom} from "./Codes/ClassRooms/index";
import { Events, EventsOne, EventsTwo } from "./Reports/Popular_Branches/index";
import Survey from "./Survey/index";
function index() {
  return (
    <>
      <Sidebar />
      <Routes>
   
        
        <Route path='/Branches/index' element={<Getbranches/>} />
        <Route path='/ClassRoom/index' element={<GetClassRoom/>} /> 
        <Route path='/Survey' element={<Survey/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/events/events1' element={<EventsOne/>} />
        <Route path='/events/events2' element={<EventsTwo/>} />
      </Routes>
    </>
  );
}
   
export default index;
