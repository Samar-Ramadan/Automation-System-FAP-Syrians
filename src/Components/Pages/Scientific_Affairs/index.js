import {  Routes, Route } from "react-router-dom";
import Trainer_Management from "./Trainer_Management/index";

import {GetQuestionBank} from './Management_Content/QuestionBank/index';
import {GetSubjects} from './Management_Content/Subjects/index';
import NavBar from "../LayOut/NavBar";
import SideBar from "../LayOut/SideBar";
import {SidebarData} from './SidebarData'

function index() {
    
  return (
    <>
   
      <NavBar/>
      
      <SideBar SidebarData={SidebarData} />
      <Routes>
   
        
        
        <Route path='/Subjects/index' element={<GetSubjects/>} />
        <Route path='/QuestionBank/index' element={<GetQuestionBank/>} /> 
        <Route path='/Trainer_Management/index' element={<Trainer_Management/>} /> 
        
      </Routes>
    </>
  );
}
   
export default index;
