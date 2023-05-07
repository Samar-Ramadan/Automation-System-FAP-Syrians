import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  background: #54B4D3;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
 
export const SidebarNav = styled.nav`
background-color:#eaeae1; 
width: 20%;
height: 100%;
display: flex;
justify-content: center;
position: fixed;
top: 54px;

right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
transition: 350ms;
z-index: 9999;
`;
 
export const SidebarWrap = styled.div`
  width: 100%;
`;
