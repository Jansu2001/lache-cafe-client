import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './ChefsDetails.css'

import RecipeDetails from './RecipeDetails/RecipeDetails';

const ChefsDetails = () => {
    const ChefDetails = useLoaderData();
    const { chef_picture,chef_description, chef_name, likes, experience, recipes } = ChefDetails.chef;
    const recipeDetails = ChefDetails.recipes;
    return (
        <div>
            <div className='mt-5 px-4 d-flex chef-info'>
                <div className='info-left'>
                    <h3 className='title'> {chef_name}</h3>
                    <h4>Likes: {likes}</h4>
                    <h4>Recipes: {recipes}</h4>
                    <h4>experience: {experience}</h4>
                    <h2><small> {chef_description}</small>
                    </h2>

                </div>
                <img className='chef-img' src={chef_picture} alt="" />

            </div>

            <div className='recipe-info'>
                {
                    recipeDetails.map((rd, index) => <RecipeDetails
                        key={index}
                        recipe={rd}
                    ></RecipeDetails>)
                }
            </div>


        </div>
    );
};

export default ChefsDetails;