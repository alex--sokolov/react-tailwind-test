import React from 'react';
import './App.css';
import {data} from "./data/data";
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';

function App() {
  return (
    <>
      <Section1 />
      <Section2 section2={data.section2}/>
      <Section3 />
      <Section4 section4={data.section4}/>
    </>
  );
}

export default App;
