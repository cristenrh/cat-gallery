import React from "react";
import CardList  from './Cards/CardList.js';
import { cats } from './cats'
import './App.css';

function App() {

  return (
    <div>
    <div className="cat-gallery container">
      <header>{cats.map((item) => <h3 key={item.deck_heading}>{item.deck_heading}</h3>) }</header> 
        <main >
        <CardList cats={cats} />
        </main>
    </div>

    </div>
  );
}


export default App;
