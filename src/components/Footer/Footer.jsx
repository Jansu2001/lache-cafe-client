import React from 'react';
import './Footer.css'
import { Card, Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='main-footer'>
            <Container className='pt-4'>
                <Row>
                    <Col md={6}>
                        <h2>Our Restaurant</h2>
                        <p>"Welcome to [Lache Cafe], where every dish is a masterpiece. Our chefs use only the freshest ingredients to create delicious, mouth-watering meals that will satisfy any craving. From savory entrees to decadent desserts, we offer a wide variety of options that are sure to please everyone.
                             Come dine with us and experience the perfect blend of taste, quality, and hospitality."</p>

                    </Col>
                    <Col md={6}>
                        <ul className="list-unstyled">
                            <h2>Location</h2>
                            <li> 123 Main Street, Anytown, USA</li>
                            <li>Phone: 09638741295</li>
                            <li>Email: info@LacheCafe.com</li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={12}>
                        <p className="text-center"> @ 2023 Our Restaurant. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Footer;