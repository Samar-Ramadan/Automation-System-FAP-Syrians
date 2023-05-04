import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar =()=>{

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/login');
}

return(
    <>
    <Navbar expand="lg" bg="primary" variant="dark" style={{boxShadow :'3px 3px 3px rgba(0, 0, 250, 0.3)'}}>
    
          <Container>
            <Navbar.Brand href="#home" >Home</Navbar.Brand>
            <Nav  className="me-auto my-2 my-lg-1"
              style= {{ maxHeight: '10%' }}
              navbarScroll>
              <Nav.Link onClick={logout}>
                <h3>logout</h3>
              </Nav.Link>
            </Nav>
          </Container>
  </Navbar>
    </>
)
}

export default NavBar;