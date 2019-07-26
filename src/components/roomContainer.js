import React from 'react';
import RoomsFilter from './roomFilter';
import RoomList from './roomList';
import {  withRoomConsumer } from '../context';
import Loading from './loading';

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
                    console.log(context);
                    if (loading) {
                        return <Loading />
                    }
                    return (
                        <div>
                            <RoomsFilter rooms={rooms}></RoomsFilter>
                            <RoomList rooms={sortedRooms}></RoomList>
                        </div>)

    // return (
    //     <RoomConsumer>
    //         {
    //             (context) => {
    //                 const { loading, sortedRooms, rooms } = context;
    //                 console.log(context);
    //                 if (loading) {
    //                     return <Loading />
    //                 }
    //                 return (
    //                     <div>
    //                         hi from container
    //                         <RoomsFilter rooms={sortedRooms}></RoomsFilter>
    //                         <RoomList rooms={rooms}></RoomList>
    //                     </div>
    //                 );

    //             }
    //         }

    //     </RoomConsumer>
    // );

}

export default withRoomConsumer(RoomContainer)
