import React from 'react';
import './Footer.css'
import { Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='main-footer'>
                <Card.Footer className="footer text-center pt-4">
                    <div>
                        <h2>Lache Cafe</h2>
                        <p>copyright by Lache Cafe</p>
                    </div>
                    <div>
                        <h1>Location</h1>                        
                        <p>444, quens ave</p>
                        <p>Maijdee, United State of Noakhali</p>
                        <p>Phone: +8809638741295</p>
                        <p>Emial: mrjansu23@gmail.com</p>
                    </div>
                    <div>
                        <h2>About the Company</h2>
                        <p>Lorem ipsum dolor sit amet consectetur <br />  elit. Odit ea repellat mollitia <br />  reprehenderit exercitationem explicabo,<br /> nihil eveniet nostrum quis reiciendis. <br /> Libero odit sunt tempore</p>
                    </div>
                </Card.Footer>
            

        </div>
    );
};

export default Footer;