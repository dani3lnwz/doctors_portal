import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Exceptional from './Exceptional';
import MakeAppoinment from './MakeAppoinment';
import Testimonial from './Testimonial';
import Footer from '../Shared/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;