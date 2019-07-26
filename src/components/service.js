import React, { Component } from 'react';
import { FaCocktail,FaHiking,FaShuttleVan} from 'react-icons/fa';
import Title from './title';

export default class Service extends Component {
    state = {
        services: [
            {
                icon:<FaCocktail/>,
                title:"Coc",
                info:"sjdkfjakdjfkjfkdfjaks"
            },
            {
                icon:<FaHiking/>,
                title:"Cock",
                info:"sjdkfjakdjfkjfkdfjaks"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Cocsss",
                info:"sjdkfjakdjfkjfkdfjaks"
            }
        ]
    }
    render() {
        return(
            <section className="services">
            <Title title="services" />
            <div className="services-center">
                {this.state.services.map((item,index) =>{
                    return<article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}

                        </h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
            </section>
        )
      
            
    }
}