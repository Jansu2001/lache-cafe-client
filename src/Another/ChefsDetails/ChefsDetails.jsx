import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

const ChefsDetails = () => {
    // const {id}=useParams()
    // console.log(id);
    const ChefDetails = useLoaderData();
    console.log(ChefDetails);
    return (
        <div>
            <h2>This is Chefs Details Componetes</h2>
            <p>Name: {ChefDetails.chef.chef_name}</p>
           
        </div>
    );
};

export default ChefsDetails;