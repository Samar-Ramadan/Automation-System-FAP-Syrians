import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// const Nav = styled.div`
//   background: #54B4;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;
 
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
 
const SidebarNav = styled.nav`
  background:gray;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
 
const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const showSidebar = () => setSidebar(!sidebar);
  const logout = () => {
    localStorage.clear();
    navigate('/login');
}
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        
    
<Navbar expand="lg" bg="primary" variant="dark">
              <FaIcons.FaBars onClick={showSidebar} />
        <Container>
          <Navbar.Brand href="#home" >Home</Navbar.Brand>
          <Nav  className="me-auto my-2 my-lg-0"
            style= {{ maxHeight: '200px' }}
            navbarScroll>
            <Nav.Link onClick={logout}>
              <h3>logout</h3>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   


        <SidebarNav sidebar={sidebar} >
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};


export default Sidebar;


