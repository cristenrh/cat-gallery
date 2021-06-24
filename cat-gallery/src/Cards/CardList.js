import React from 'react';
import Card from './Card';

const CardList = ({ cats }) => {
    return(
        <div className="flex-grid-thirds">
            {
            cats.map((user, i) => {
                return (
                <Card 
                    key={i} 
                    title={cats[i].title} 
                    image={cats[i].image} 
                    body={cats[i].body}
                    links={cats[i].links}
                    href={cats[i].links.href}
                    text={cats[i].links.text}
                />
            );
        })
    }
    </div>
    );
    }

export default CardList;