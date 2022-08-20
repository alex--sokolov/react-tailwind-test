import React from 'react';
import { IData, ISection2 } from '../../interfaces';
import Parser from 'html-react-parser';
import { generateKey } from '../../utils/generateKey';

const Section2 = (props: Pick<IData, 'section2'>) => {

  const { section2 } = props;
  const digitBlocks = section2.map((item: ISection2, index: number) => {
    return (
      <div
        className="flex sm:flex-col lg:flex-row items-center justify-center"
        key={generateKey(index)}>
        <div className="text-point font-semibold mr-5 border-red-600 hidden lg:block">
          .
        </div>
        <div className="text-digit lg:text-[42px] xl:text-[72px] w-[120px] sm:w-auto">
          {item.digit}
        </div>
        <div className="text-digit-text text-[14px] lg:text-[16px] w-[220px] sm:w-auto ml-4">
          {Parser(item.text)}
        </div>
      </div>
    );
  });

  return (
    <section id="section2" className="mt-[80px]">
      <div className="flex flex-col sm:flex-row justify-center gap-[5px] lg:gap-[20px] xl:gap-[60px]">
        {digitBlocks}
      </div>
    </section>
  );
};

export default Section2;