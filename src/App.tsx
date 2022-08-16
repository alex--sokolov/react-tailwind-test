import React from 'react';
import './App.css';
import {data} from "./data/data";
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';

function App() {
  return (
    <>
      <Section1 />
      <Section2 data={data.section2}/>
      <Section3 />
    </>
  );
}

export default App;
