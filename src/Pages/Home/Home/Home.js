import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import './Home.css'; // Import the CSS file for styling
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppinment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <div className='home-container'>
                <Banner></Banner>
                <InfoCards></InfoCards>
            </div>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
