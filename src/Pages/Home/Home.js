import React from 'react';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Download from '../../components/Download/Download';
import HeroSection from '../../components/HeroSection/HeroSection';
import Services from '../../components/Services/Services';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Services />
            <About />
            <Testimonial />
            <Download />
            <Contact />
        </div>
    );
};

export default Home;