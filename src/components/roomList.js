import React from 'react';
import Room from './room';
// import roomContainer from './roomsContainer';

export default function RoomList({rooms}) {
    console.log(rooms);
    if(rooms.length === 0){
        return(
        <div className="empty-search">
            <h3>No rooms matched</h3>
        </div>
        )
     }
    console.log(rooms);
    return <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item => {
                        return <Room key={item.id} room={item}/>
                    })
                }
            </div>
        </section>
    
}