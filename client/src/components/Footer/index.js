// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="w-100 mt-auto bg-secondary p-4">
//       <div className="container">
//         &copy;{new Date().getFullYear()} ePillbox by
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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