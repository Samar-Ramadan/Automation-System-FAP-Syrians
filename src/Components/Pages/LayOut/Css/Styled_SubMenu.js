import styled from "styled-components";
import { Link } from "react-router-dom";


export const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
 
  &:hover {
    background: rgb(180, 0, 0,0.5);
    cursor: pointer;
  }
`;
 
export const SidebarLabel = styled.span`
  margin-left: 16px;
  textAlign: 'right'
`;
 
export const DropdownLink = styled(Link)`
  background: #252831;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
 
  &:hover {
    background: green;
    cursor: pointer;
  }
`;
