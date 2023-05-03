import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import ActiveHeader from '../components/Header/ActiveHeader';

const Another = () => {
    return (
        <div>
            <ActiveHeader></ActiveHeader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Another;