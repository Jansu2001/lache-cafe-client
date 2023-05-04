import React from 'react';

const Service = () => {
    return (
        <div>
            <h1 className='mt-4 text-center'>Our Services</h1>
            <div className='d-flex gap-3 px-4 pt-4'>
                <div className='border p-4'>
                    <h1>Breakfast</h1>
                    <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
                </div>
                <div className='border p-4'>
                    <h1>Brunch</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sit quia facere </p>
                </div>
                <div className='border p-4'>
                    <h1>Lunch</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem aut laboriosam voluptatibus minima?</p>
                </div>
                <div className='border p-4'>
                    <h1>Dinner</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, commodi.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;