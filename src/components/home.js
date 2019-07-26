import React from 'react';
import Hero from '../components/hero';
import Banner from './banner';
import { Link } from 'react-router-dom';
import Service from './service';
import FeaturedRooms from './featuredroom';


export default function Home() {
    return(
        <>
        
        <Hero hero="defaultHero">
        <Banner title="Find Perfect Flat" subtitle="Ideal rooms from $200"><Link className="btn-primary" to="/rooms">Rooms</Link></Banner>
        
        </Hero>
        <Service></Service>
        <FeaturedRooms></FeaturedRooms>
        
        </>
            
    );

}


