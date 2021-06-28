import React from 'react';
import Card from './Card';

const CardList = ({ cats }) => {
    return(
        <div>
             {
            cats.map((item, i) => {
                return (
                <Card 
                    key={i} 
                 card = {cats[i].cards}
                links = {cats[i].cards.links}
                />
                );
            })
        }
        </div>
        );
        }

export default CardList;