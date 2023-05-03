import React, { useState } from 'react';
import { Button, Card, CardGroup, } from 'react-bootstrap';
import { toast } from 'react-toastify';

const RecipeDetails = ({ recipe }) => {
    const { cooking_method, recipe_name, rating, ingredients,recipe_url } = recipe;
    const [toastDisable,setToastDisable]=useState(false)

    const handleFavourite=()=>{
        toast('This is My Favourite')
        setToastDisable(true)
    }
    return (
        <div className='mt-4 px-4'>
            <CardGroup className='gap-4 h-100'>
                <Card>
                    <Card.Header className='text-center fs-4 fw-bold'>{recipe_name}</Card.Header>
                    <Card.Img className='p-3 h-40' variant="top" src={recipe_url} />
                    <Card.Body>
                        <Card.Title>Cooking Method</Card.Title>
                        <Card.Text>
                            {cooking_method.slice(0, 400)}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className='d-flex '>
                        <div>
                            <Card.Title>Ingredients</Card.Title>
                            <ul>
                                <li>{ingredients[0]}</li>
                                <li>{ingredients[1]}</li>
                                <li>{ingredients[2]}</li>
                                <li>{ingredients[3]}</li>
                            </ul>
                        </div>
                        <Card.Title>Rating: {rating}</Card.Title>
                    </Card.Body>
                    <Card.Footer className='card-footer'>
                        <p><Button disabled={toastDisable} onClick={handleFavourite} className='view-btn'>Add to Favourite</Button></p>
                        
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default RecipeDetails;