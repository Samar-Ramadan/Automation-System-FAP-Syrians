
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Codes from "./Pages/Codes";
import Branches from "./Pages/Branches";
import Add from "./Components/Add";
import Edit from "./Components/Edit";

function App(){
return(
  <div className="App">
 
   <BrowserRouter>
        <Sidebar/>
        <Routes>
          
            <Route exact path="/" element={<Codes/>}/>
            <Route path="/" element={<Add/>}/>
           {/* // <Route path="/edit" element={<Edit/>}/>
            <Route path="/Branches" element={<Branches/>}/> */}
        </Routes>
        
        
        </BrowserRouter>
        
  </div>
)
}
export default App;