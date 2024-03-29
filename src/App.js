import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import GeneralManger from "./Components/Pages/General_Manger/index";
import { Events, EventsOne, EventsTwo } from "./Components/Pages/General_Manger/Reports/Popular_Branches/index";
import Content from "./Components/Pages/Content";
import AuthUser from './Components/Auth_User/AuthUser';
//import {OurVision} from './Components/Pages/General_Manger/Codes/Branches/index'
import BranchManger from "./Components/Pages/Branch_Manger/index";
import ScientificAffairs from "./Components/Pages/Scientific_Affairs/index";
import Receptionist from "./Components/Pages/Receptionist/index"


// class App extends Component {

//   render() {
    
//     return (
      
  
//       <GeneralManger/>
//     );
//   }
// }
function App(){
  const {getToken,getUser} = AuthUser();
  if(!getToken()){
    return <Content />
  }
  else if(getUser().roll_number===0){
    return <GeneralManger />
  }
  else if(getUser().roll_number===1){
    return <ScientificAffairs />
  }
  else if(getUser().roll_number===2){
    debugger
    return <BranchManger />
  }
  else if(getUser().roll_number===3){
    debugger
    return <Receptionist />
  }
  return (
      <GeneralManger />
  );

}
export default App;
