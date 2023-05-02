import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import ChefsCard from '../Chefs/ChefsCard';
import './Home.css'
import Footer from '../Footer/Footer';


const Home = () => {

    const [chefsData, setChefsData] = useState([])


    useEffect(() => {
        fetch('https://chef-recipe-server-jansu2001.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefsData(data))

    }, [])
    console.log(chefsData);
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
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