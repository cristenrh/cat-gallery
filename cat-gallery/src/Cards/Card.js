import React from 'react';

const Card = ({card, links}) => {

  const content = card.map((catcard) =>
    <div className="col" key={catcard.id}>
      <div className='gallery-card dib' >
        <div className="pa2" >
          <img src ={`https://content.schwab.com/c2/UIE_codetest/img/${catcard.image}`}  alt = {`${catcard.title}`}/>
          <h4>{catcard.title}</h4>
          <p>{catcard.body}</p>
          <p>{catcard.links.map(link => <a key={link.text} href={link.href}>{link.text}</a>)}</p>   
        </div>
    </div>
  </div>
);

  return (
    <div>
          <div className="flex-grid-thirds ma2-m ma0-l">
            
                  {content}
                             
          </div>
    </div>
  )
};

export default Card;