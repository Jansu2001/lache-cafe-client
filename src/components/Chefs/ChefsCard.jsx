import React from 'react';
import './ChefsCard.css'

import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefsCard = ({ chefs }) => {
    const { chef_name, chef_picture, recipes, experience, likes } = chefs.chef
    

    return (
        <div >
            <Card>
                <Card.Img variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <div>
                        <p>Experience: {experience}</p>
                        <p>Likes: {likes}</p>
                        <p>Recipes: {recipes}</p>
                    </div>
                </Card.Body>
                <Card.Footer className='card-footer'>
                    <p><Link to={`/chefs-details/${chefs.chef_id}`} className='view-btn'>View Recipes</Link></p>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default ChefsCard;