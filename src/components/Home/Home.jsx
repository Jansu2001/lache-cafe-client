import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ChefsCard from '../Chefs/ChefsCard';
import './Home.css'
import Footer from '../Footer/Footer';
import ActiveHeader from '../Header/ActiveHeader';
import { Spinner } from 'react-bootstrap';
import BestRecipe from './BestRecipe/BestRecipe';
import Service from './Service/Service';


const Home = () => {

    const [chefsData, setChefsData] = useState([])
    useEffect(() => {
        fetch('https://chef-recipe-server-jansu2001.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefsData(data))
    }, [])
   
    return (
        <div>
            <ActiveHeader></ActiveHeader>
            <Banner></Banner>
            <Service></Service>
            <BestRecipe></BestRecipe>
                <h1 className='text-center fs-1 fw-bold pt-4'>Our Professional</h1>
            <section className='chefs-card'>

                {
                    chefsData.map(chefs=><ChefsCard
                    key={chefs.chef_id}
                    chefs={chefs}
                    ></ChefsCard>)
                }
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;