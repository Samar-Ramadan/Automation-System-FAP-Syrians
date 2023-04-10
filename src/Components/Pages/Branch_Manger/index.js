import "../Css/General_Manager.css";
import Sidebar from "./Layout/Sidebar";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import {GetClassRoom} from "./Codes/ClassRooms/index";
import Trainer_Management from "./Trainer_Management/index";
import AuthUser from '../../Auth_User/AuthUser';

function index() {
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token !== undefined){
            logout();
        }
    }
  return (
    <>
   
      <Sidebar />
      <Routes>
   
        
        <Route path='/ClassRoom/index' element={<GetClassRoom/>} /> 
        <Route path='/Trainer_Management/index' element={<Trainer_Management/>} /> 
      </Routes>
    </>
  );
}
   
export default index;
