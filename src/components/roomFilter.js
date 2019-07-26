import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './title';

const gettypes = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice, maxPrice, minSize, maxSize, pets
    } = context;

    let types = gettypes(rooms, 'type');
    types = ['all', ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = gettypes(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">

            <Title title="search rooms" />
            <form className="filter-form">
                {}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange} >
                        {types}
                    </select>

                </div>

                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange} >
                        {people}
                    </select>

                </div>

                <div className="form-group">
                    <label htmlFor="price">Price is {price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice}
                        id="price" value={price} onChange={handleChange} className="form-control" />
                </div>


                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <input type="number" name="minSize" id="size" value={minSize}
                        onChange={handleChange} className="size-input" />

                    <input type="number" name="maxSize" id="size" value={maxSize}
                        onChange={handleChange} className="size-input" />
                </div>

                <div className="form-group" >
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets" >pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}