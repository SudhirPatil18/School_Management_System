import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from './about';

const HomePage = () => {
    const navigateTo = useNavigate();

    return (
        <div>
            <Header />
            <div class="bg-img">
               
            </div>
            
            <Footer />
            <About/>
           
        </div>
    );
}

export default HomePage;
