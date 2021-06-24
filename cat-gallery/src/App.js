import React from "react";
import CardList  from './Cards/CardList.js';
// // import { fetchData  } from './api';
import { cats } from './cats'
import './App.css';

function App() {

  return (
    <section className="container">
          <CardList cats={cats} />
      </section>
  );
}

export default App;
