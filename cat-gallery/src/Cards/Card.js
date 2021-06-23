import React from 'react';

const Card = ({title, image, body, text, href}) => {
 

  return (
    <div className="col">
      <div className='gallery-card dib'>
          <div>
            <div className="gallery-card-front pa2">

              <img src ={`https://content.schwab.com/c2/UIE_codetest/img/${image}`}  alt = {`${title}`}/>
                    <h3>{title}</h3>
                    <p>{body}</p>   
                    <p><a href={`${href}`}>{text}</a></p>         
              </div>
             
            </div>
      </div>
    </div>
  )
};

export default Card;