import React from "react";
import {Routes, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import {Getbranches} from "./Codes/Branches/index";
import Editbranches from "./Codes/Branches/update";

import GetRecordEmployee from "./ControlPanel/RecordEmployee/index";

import {EventsTwo } from "./Reports/Popular_Branches/index";
import Survey from "./Survey/index";
import NavBar from "../LayOut/NavBar";
import SideBar from "../LayOut/SideBar";
import {SidebarData} from './SidebarData'

function index () {

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
   
                         <Route path='/Branches/index' element={<Getbranches/>} /> 
                         <Route path='/Branches/edit:id' element={<Editbranches/>} /> 
                    
                         <Route path='/Survey' element={<Survey/>} />
                         <Route path='/ControlPanel/RecordEmployee' element={<GetRecordEmployee/>} />
                         <Route path='/events/events2' element={<EventsTwo/>} />
                    </Routes>
               </Col>
      

         </Row>

      </Container>

          </>
  );
}
   
export default index;
