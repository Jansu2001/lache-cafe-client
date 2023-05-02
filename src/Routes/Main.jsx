
import Home from '../components/Home/Home';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;