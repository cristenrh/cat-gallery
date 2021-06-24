import React from 'react';

const Card = ({title, image, body, links, i}) => {
  // const linkList = links.map((link) => 
  // <a href={link}>{link}</a>            
  // );
  return (
    <div className="col">
      <div className='gallery-card dib'>
          <div>
            <div className="gallery-card-front pa2">

              <img src ={`https://content.schwab.com/c2/UIE_codetest/img/${image}`}  alt = {`${title}`}/>
                    <h3>{title}</h3>
                    <p>{body}</p>   
                    <p>{links.map(link => <a key={link.text} href={link.href}>{link.text}</a>)}</p>      
              </div>
             
            </div>
      </div>
    </div>
  )
};

export default Card;