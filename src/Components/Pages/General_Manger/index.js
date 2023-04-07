import "../Css/General_Manager.css";
import Sidebar from "./Layout/Sidebar";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import {Getbranches} from "./Codes/Branches/index";
import {GetClassRoom} from "./Codes/ClassRooms/index";
//import {Add} from "./Codes/Branches/add";
// import {
//   Services,
//   ServicesOne,
//   ServicesTwo,
//   ServicesThree,
// } from "./Survey/index";
import { Events, EventsOne, EventsTwo } from "./Reports/Popular_Branches/index";
import Survey from "./Survey/index";
function index() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
   
        
        <Route path='/Branches/index' element={<Getbranches/>} />
        <Route path='/ClassRoom/index' element={<GetClassRoom/>} /> 
        
        {/* <Route path='/Branches/ubdate' element={<Ubdate/>} /> */}
        {/* <Route path='/about-us/aim' element={<OurAim/>} />
        <Route path='/about-us/vision' element={<OurVision/>} /> */}
        {/* <Route path='/services' element={<Services/>} />
        <Route path='/services/services1' element={<ServicesOne/>} />
        <Route path='/services/services2' element={<ServicesTwo/>} />
        <Route path='/services/services3' element={<ServicesThree/>} /> */}
        <Route path='/Survey' element={<Survey/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/events/events1' element={<EventsOne/>} />
        <Route path='/events/events2' element={<EventsTwo/>} />
      </Routes>
    </BrowserRouter>
  );
}
   
export default index;
