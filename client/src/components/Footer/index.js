
import React from 'react';
// import './footer.css';
import { Container, Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
        <Card text="center" bg='secondary' variant='dark' text='warning'>

            <Card.Footer className="md-3 action">
                
                <section className='footer-copyright text-center py-3'>
                    <Container classname="md-3 fluid">
                        &copy; {new Date().getFullYear()} CopyRight: ePillbox
                        <br></br>
                        <br></br>
                        <h7 className='text-center' >
                        Created by Alex Wu,  Kieran Hannagan, Krista Meyer, Michael Bahl
                        </h7>

                    </Container>
                </section>

            </Card.Footer>
        </Card>
        </footer>
    )
 }
    export default Footer;