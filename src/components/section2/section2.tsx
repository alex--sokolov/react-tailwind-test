import React from 'react';
import { ISection2 } from '../../interfaces';
import Parser from 'html-react-parser';

const Section2 = (props:any) => {

  const generateKey = (pre:number) => {
    return `${ pre }_${ Date.now() }`;
  }
  const {data} = props;
  const digitBlocks = data.map((item:ISection2, index:number) => {
    return (
      <div
        className="flex items-center"
        key={generateKey(index)}>
        <div className='text-point font-semibold mr-5'>
          .
        </div>
        <div className="text-digit">
          {item.digit}
        </div>
        <div className="text-digit-text ml-4">
          {Parser(item.text)}
        </div>
      </div>
    )
  });

  return (
    <section id="section2" className='mt-[80px]'>
      <div className="flex justify-center gap-[60px]">
        {digitBlocks}
      </div>
    </section>
  );
};

export default Section2;