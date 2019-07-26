import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
// import Hero from './hero';
import Banner from './banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from './styledHero';


export default class Single extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    // componentDidMount(){ }
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room) {
            return <div className="error">
                <h3>no such room</h3>
                <Link to="/rooms" className="btn-primary" />
            </div>
        }

        // const { name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        const { name,description,capacity,size,price,extras,pets,images} = room;
        const [mainImg] = images;
        return (
            <>
           <StyledHero img={mainImg }>
               <Banner title={`${name} room`}>
               <Link to="/rooms" className="btn-primary">Back To Rooms</Link>
               </Banner>
               
           </StyledHero>

           <section className="single-room">
               <div className="single-room-images">
                   {images.map((item,index)=>{
                       return(<img key={index} src={item} alt={name} />)    
                   })}
               </div>

               <div className="single-room-info" >
                   <article className="desc">
                       <h3>Details</h3>
                        <p>{description}</p>
                   </article>
                   
                   <article className="info">
                       <h3>Info</h3>
                        <h6>Price: ${price}</h6>
                        <h6>Size: ${size}</h6>
                        <h6>max capacity: {
                            capacity>1 ?`${capacity} people`:`${capacity} person`
                        }
                            </h6>
                            <h6>
                                {pets?"Pets allowed":"No pets"}
                            </h6>

                   </article>

               </div>
           </section>
           
           <section className="room-extras">
                       <h6>Extras</h6>
                       <ul className="extras">
                        {extras.map((item,index)=>{
                            return <li key={index}>
                                -{item}
                            </li>
                        })}
                        </ul>
                   </section>
           </>
        )
    }
}