import React from 'react';
// import './footer.css';
import { Container, Card } from 'react-bootstrap';

const Footer = () => {
    return (

        <Card bg='secondary' variant='dark' text='warning'>

            <Card.Footer className="md-3 action">
                <small className='tex-muted'>
                   
                    
                    Created by Alex W.,  Kieran H., Krista M., Michael B.
                
                    
                </small>
                <div clssName='footer-copyright text-center py-3'>
                    <Container fluid>
                        &copy; {new Date().getFullYear()} CopyRight: ePillbox
                    </Container>
                </div>

            </Card.Footer>
        </Card>
       
    )
 }
    export default Footer;