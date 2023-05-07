import {  Routes, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Cards from "./Cards/index"
import GetRecordStudent from "./ManagementStudent/RecordStudent/index"
import NavBar from "../LayOut/NavBar";
import SideBar from "../LayOut/SideBar";
import {SidebarData} from './SidebarData'

function index() {
    
  return (
    <>
   
      <NavBar/>

      <Container fluid>
         <Row>
               <Col sm={2}>
                  <SideBar SidebarData={SidebarData} />
               </Col>
               <Col sm={10}>
                  <Routes>
                  <Route path='/Cards/index' element={<Cards/>} /> 
                 <Route path='/ManagementStudent/RecordStudent' element={<GetRecordStudent/>} />
                    </Routes>
               </Col>
      

         </Row>

      </Container>

      
    </>
  );
}
   
export default index;
