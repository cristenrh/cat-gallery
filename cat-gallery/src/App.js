import React from "react";
import CardList  from './Cards/CardList.js';
// // import { fetchData  } from './api';
import { cats } from './cats'
import './App.css';

function App() {

  return (
    <div className="container">
          <CardList cats={cats} />
      </div>
  );
}

export default App;
