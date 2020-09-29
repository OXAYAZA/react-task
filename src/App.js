import React from 'react';
import Slider from './components/slider/slider';
import Intro from './components/intro/intro';
import Search from './components/search/search';

function App() {
  return (
    <main className="app">
      <Slider/>
      <Intro/>
      <Search/>
    </main>
  );
}

export default App;
