import React from 'react'
import { Nav, Navbar, Button, Container } from 'react-bootstrap'
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <div>
        {/* <script>
            AOS.init();
        </script> */}

<div style={{width: "100%", position: "sticky", top: 0, zIndex: 2, padding: 0}}>
    <Navbar style={{backgroundColor: '#00000', opacity:"90%" }}>
        <Container>
            <Navbar.Brand>
                <img src="Assests\duello logo3.png" alt="logo" className='logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-aut align-right">
                    <Nav.Link href="#home" className="nav-items">Home</Nav.Link>
                    <Nav.Link href="#agenda" className="nav-items">Treatments</Nav.Link>
                    <Nav.Link href="#guideline" className="nav-items">Guideline</Nav.Link>
                    
                    

                </Nav>
            </Navbar.Collapse>
        </Container>    
    </Navbar>
</div>
    </div>
  )
}

export default NavigationBar

