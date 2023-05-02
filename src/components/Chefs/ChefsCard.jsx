import React from 'react';
import './ChefsCard.css'

import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

const ChefsCard = ({ chefs }) => {
    const { chef_name, chef_picture, recipes, experience, likes } = chefs.chef
    return (


        <div >
            <Card>
                <Card.Img variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Text>
                        <p>Experience: {experience}</p>
                        <p>Likes: {likes}</p>
                        <p>Recipes: {recipes}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='card-footer'>
                    <button className='view-btn'>View Recipes</button>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default ChefsCard;