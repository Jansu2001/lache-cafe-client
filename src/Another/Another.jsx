import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Another = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Another;