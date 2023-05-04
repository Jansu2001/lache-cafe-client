import React, { useContext } from 'react';
import './ChefsCard.css'

import { Card, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefsCard = ({ chefs }) => {
    const { chef_name, chef_picture, recipes, experience, likes } = chefs.chef
 
    return (
        <div >
            <Card>
                <Card.Img className='p-2' variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <div>
                        <p className='m-1'>Experience: {experience}</p>
                        <p className='m-1'>Likes: {likes}</p>
                        <p className='m-1'>Recipes: {recipes}</p>
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