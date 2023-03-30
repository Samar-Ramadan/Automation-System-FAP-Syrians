
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
import Header from "./Components/HomePages/Header";
import Footer from "./Components/HomePages/Footer";
import About from "./Components/HomePages/About";
import Resume from "./Components/HomePages/Resume";
import Contact from "./Components/HomePages/Contact";
import Portfolio from "./Components/HomePages/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
