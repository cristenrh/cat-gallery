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
                    text={cats[i].links.text}
                    href={cats[i].links.href}
                />
            );
        })
    }
    </div>
    );
    }

export default CardList;