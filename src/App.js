
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
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     foo: "bar",
  //     resumeData: {}
  //   };

  //   ReactGA.initialize("UA-110570651-1");
  //   ReactGA.pageview(window.location.pathname);
  // }

  // getResumeData() {
  //   $.ajax({
  //     url: "./resumeData.json",
  //     dataType: "json",
  //     cache: false,
  //     success: function(data) {
  //       this.setState({ resumeData: data });
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.log(err);
  //       alert(err);
  //     }
  //   });
  // }

  // componentDidMount() {
  //   this.getResumeData();
  // }

  render() {
    return (
      <GeneralManger/>
      // <div className="App">
      //   <li><Link className="nav" to="/general_manager">Generale</Link></li>
        
      //   <BrowserRouter>
        
      //   <Routes>
      //       <Header data={this.state.resumeData.main} />
      //       <About data={this.state.resumeData.main} />
      //       <Portfolio data={this.state.resumeData.portfolio} />
      //       <Contact data={this.state.resumeData.main} /> 
         
            
      //       <Route  path="/general_manager" element={<GeneralManger/>}/>
         
      //   <Route path='/about-us' element={<AboutUs/>} />
      //   <Route path='/about-us/aim' element={<OurAim/>} />
      //   <Route path='/about-us/vision' element={<OurVision/>} />
      //   <Route path='/services' element={<Services/>} />
      //   <Route path='/services/services1' element={<ServicesOne/>} />
      //   <Route path='/services/services2' element={<ServicesTwo/>} />
      //   <Route path='/services/services3' element={<ServicesThree/>} />
      //   <Route path='/contact' element={<Contact/>} />
      //   <Route path='/events' element={<Events/>} />
      //   <Route path='/events/events1' element={<EventsOne/>} />
      //   <Route path='/events/events2' element={<EventsTwo/>} />  
         
      //       </Routes>
      //    <Footer data={this.state.resumeData.main} />
      //    </BrowserRouter> 
        
      // </div>
    );
  }
}

export default App;
