 import React from 'react';
 import Hero from '../components/hero';
 import Banner from './banner';
import { Link } from 'react-router-dom';
import RoomContainer from './roomContainer';

 export default function Rooms() {
    return(
        <>
    <Hero hero="roomsHero" >
        <Banner title="Rooms">
            <Link to="/" className="btn-primary">Return Home</Link>
        </Banner>
        </Hero>
        <RoomContainer>

        </RoomContainer>

        </>
    )

}