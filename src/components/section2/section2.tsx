import React from 'react';
import { IData, ISection2 } from '../../interfaces';
import Parser from 'html-react-parser';
import { generateKey } from '../../utils/generateKey';

const Section2 = (props: Pick<IData, 'section2'>) => {

  const { section2 } = props;
  const digitBlocks = section2.map((item: ISection2, index: number) => {
    return (
      <div
        className="flex items-center"
        key={generateKey(index)}>
        <div className="text-point font-semibold mr-5 border-red-600 ">
          .
        </div>
        <div className="text-digit">
          {item.digit}
        </div>
        <div className="text-digit-text ml-4">
          {Parser(item.text)}
        </div>
      </div>
    );
  });

  return (
    <section id="section2" className="mt-[80px]">
      <div className="flex justify-center gap-[60px]">
        {digitBlocks}
      </div>
    </section>
  );
};

export default Section2;