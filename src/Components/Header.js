import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import "./Header.css"


const Header = () => {
  return (
    <div>
        <div className='header-box'>

        <div className='button-group'>
                    <div className='button'>
                        <Button href='#resgister'  className="btn-primary" >Video Consultation</Button>
                    </div>
                    <div className='buttons'>
                        <Button href='#resgister'  className="btn-primary">Resgister</Button>
                    </div>

                </div>
            
            <Container style={
                {
                    height:'100%',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems: 'center'
                }
            }>

                

                

                <div className='overlay'>
                    <h1 className='font'>Sample</h1>
                                
                    <h5  className='font'>Lorem</h5>

                    <p className='font'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                

                </div>

                
                
                
                      
                        
                    
            </Container>
            
                
            
        </div>
    </div>
  )
}

export default Header