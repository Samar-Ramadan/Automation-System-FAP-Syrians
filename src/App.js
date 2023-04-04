
// import "./App.css";
// import Sidebar from "./Components/Sidebar";
// import { BrowserRouter, Route, Routes} from "react-router-dom";
// import Codes from "./Pages/Codes";
// import Branches from "./Pages/Branches";
// import Add from "./Components/Add";
// import Edit from "./Components/Edit";

// function App(){
// return(
//   <div className="App">
 
//    <BrowserRouter>
//         <Sidebar/>
//         <Routes>
          
//             <Route exact path="/" element={<Codes/>}/>
//             <Route path="/" element={<Add/>}/>
//            {/* // <Route path="/edit" element={<Edit/>}/>
//             <Route path="/Branches" element={<Branches/>}/> */}
//         </Routes>
        
        
//         </BrowserRouter>
        
//   </div>
// )
// }
// export default App;
import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import { BrowserRouter, Route, Routes,Link} from "react-router-dom";
import Header from "./Components/HomePages/Header";
import Footer from "./Components/HomePages/Footer";
import About from "./Components/HomePages/About";
import Resume from "./Components/HomePages/Resume";
//import Contact from "./Components/HomePages/Contact";
import Portfolio from "./Components/HomePages/Portfolio";
import GeneralManger from "./Components/Pages/General_Manger/index";
//import { Link ,NavLink } from "react-router-dom";


import { AboutUs, OurAim, OurVision } from "./Components/Pages/General_Manger/Codes/Branches/index";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./Components/Pages/General_Manger/Survey/index";
import { Events, EventsOne, EventsTwo } from "./Components/Pages/General_Manger/Reports/Popular_Branches/index";
import Contact from "./Components/Pages/General_Manger/Reports/Enterprise_Revenues/index";
import AuthUser from './Components/Auth_User/AuthUser';
//import {OurVision} from './Components/Pages/General_Manger/Codes/Branches/index'
import Survey from "./Components/Pages/General_Manger/Survey/index";


class App extends Component {

  render() {
    
    return (
      
  
      <GeneralManger/>
    );
  }
}

export default App;
