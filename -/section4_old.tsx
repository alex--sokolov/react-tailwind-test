import React, { useEffect, useRef, useState } from 'react';
import { IData, ISection4 } from '../../interfaces';
import Parser from 'html-react-parser';
import { generateKey } from '../../utils/generateKey';
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion';

import benefit1 from './../../assets/img/svg/benefit-1.svg';
import benefit2 from './../../assets/img/svg/benefit-2.svg';
import benefit3 from './../../assets/img/svg/benefit-3.svg';
import benefit4 from './../../assets/img/svg/benefit-4.svg';
import benefit5 from './../../assets/img/svg/benefit-5.svg';
import benefit6 from './../../assets/img/svg/benefit-6.svg';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const getBenefitImage = (benefitName: string) => {
  switch (benefitName) {
    case 'benefit-1':
      return benefit1;
    case 'benefit-2':
      return benefit2;
    case 'benefit-3':
      return benefit3;
    case 'benefit-4':
      return benefit4;
    case 'benefit-5':
      return benefit5;
    case 'benefit-6':
      return benefit6;
    default:
      return benefit1;
  }
};

const Section4 = (props: Pick<IData, 'section4'>) => {

  const { section4 } = props;

  const [tab, setTab] = useState('skills_upgrade');

  const tabElements = tab === 'skills_upgrade' ? section4.slice(0, 3) : section4.slice(4, 6);
  let blocks = tabElements.map((item: ISection4, index: number) => {
    const img = getBenefitImage(item.icon);
    return (
      <div
        className="flex items-center flex-col"
        key={generateKey(index)}>
        <div className="">

          <img src={img};
          alt = '' / >
        </div>
        < div
        ;
        className = 'text-[21px] font-medium leading-[130%] text-white text-center pt-[30px]' >
        {Parser(item.text
        )
        }
      </div>
  < /div>
    ;
  )
    ;
  });

  useEffect(() => {
    blocks = section4.map((item: ISection4, index: number) => {
      const img = getBenefitImage(item.icon);
      return (
        <div
          className="flex items-center flex-col"
          key={generateKey(index)}>
          <div className="">

            <img src={img};
            alt = '' / >
          </div>
          < div
          ;
          className = 'text-[21px] font-medium leading-[130%] text-white text-center pt-[30px]' >
          {Parser(item.text
          )
          }
        </div>
    < /div>
      ;
    )
      ;
    });
  }, [tab]);

  // const { ref, inView } = useInView({
  //   threshold: [0.95],
  //   delay: 1000,
  //   trackVisibility: true,
  //   // delay: 1,
  //   // rootMargin: '200px'
  // });


  const [isBlockOver, setIsBlockOver] = useState(false);

  const [pos, setPos] = useState(0);

  let scrollThreshold = [
    pos,
    pos + 4000 - document.documentElement.clientHeight
  ];
  const h1Animation = useAnimation();
  let { scrollY } = useScroll();
  let scrollYOnDirectionChange = useRef(scrollY.get());
  let lastPixelsScrolled = useRef(0);
  let lastScrollDirection = useRef('down');
  let pixelsScrolled = useMotionValue(0);
  let heightSection = useTransform(pixelsScrolled, scrollThreshold, [100, 400]);
  let topSection = useTransform(pixelsScrolled, scrollThreshold, [0, 300]);
  let height = useMotionTemplate`${heightSection}vh`;
  let top = useMotionTemplate`${topSection}vh`;

  const scrollFunc = (latest: number) => {
    // console.log('latest:', latest);
    // console.log('pos:', pos);
    // console.log('scrollThreshold[0]: ', scrollThreshold[0]);
    // console.log('scrollThreshold[1]: ', scrollThreshold[1]);
    if (
      latest < scrollThreshold[0]
    ) return;
    let isScrollingDown = scrollY.getPrevious() - latest < 0;
    let scrollDirection = isScrollingDown ? 'down' : 'up';

    let currentPixelsScrolled = pixelsScrolled.get();
    let newPixelsScrolled: number;

    // console.log('currentPixelsScrolled: ', currentPixelsScrolled);


    if (lastScrollDirection.current !== scrollDirection) {
      lastPixelsScrolled.current = currentPixelsScrolled;
      scrollYOnDirectionChange.current = latest;
    }

    if (isScrollingDown) {
      newPixelsScrolled = Math.min(
        lastPixelsScrolled.current +
        (latest - scrollYOnDirectionChange.current),
        scrollThreshold[1]
      );

      if (newPixelsScrolled === scrollThreshold[1]) {
        console.log('EPTA');
        if (!isBlockOver) setIsBlockOver(true);
      }
    } else {
      if (latest > scrollThreshold[1]) {
        newPixelsScrolled = scrollThreshold[1];
      } else {
        // console.log('GO UPPP', latest)
        newPixelsScrolled = Math.max(latest,
          scrollThreshold[0]
        );
      }
      if (newPixelsScrolled > scrollThreshold[0] && newPixelsScrolled < scrollThreshold[1]) {
        if (isBlockOver) setIsBlockOver(false);
      }
    }
    // console.log('latest:', latest);
    // console.log('isScrollingDown:', isScrollingDown);
    // console.log('newPixelsScrolled:', newPixelsScrolled);
    // console.log('scrollDirection:', scrollDirection);

    pixelsScrolled.set(newPixelsScrolled);
    lastScrollDirection.current = scrollDirection;
  };


  const appearBlockAnimation = {
    before: {
      // rotate: 0,
      position: 'static',
    },
    visible: {
      position: 'fixed',
      // rotate: 45,
      // transition: { duration: 1 },
    },
  };


  // useEffect(() => {
  //   const current = scrollY.get();
  //   // console.log('------------------------------------------------------------');
  //   // console.log('scrollY.latest: ', scrollY.getPrevious());
  //   // console.log('scrollY.get: ', scrollY.get());
  //   // console.log('scrollYOnDirectionChange: ', scrollYOnDirectionChange);
  //   // console.log(' lastPixelsScrolled: ', lastPixelsScrolled);
  //   // console.log(' scrollThreshold[0]: ', scrollThreshold[0]);
  //   // console.log(' scrollThreshold[1]: ', scrollThreshold[1]);
  //   // console.log(' pixelsScrolled: ', pixelsScrolled);
  //   // console.log('current: ',current);
  //
  //   if (inView && current < scrollThreshold[1]) {
  //
  //     if (pos === 0) {
  //       setPos(current);
  //     }
  //     setIsBlockOver(false);
  //     h1Animation.start({
  //       opacity: 1,
  //       y: -80,
  //       transition: {
  //         opacity: {
  //           duration: 1,
  //         },
  //         y: {
  //           delay: 1,
  //           duration: 1,
  //         }
  //       }
  //     });
  //   } else {
  //     h1Animation.start({
  //       opacity: 0,
  //       y: 0,
  //       transition: {
  //         type: 'spring', duration: 1
  //       }
  //     });
  //   }
  //   console.log('inside use effect, inView = ', inView);
  // }, [inView]);


  useEffect(() => {
    if (pos === 0) {
      return;
    }
    return scrollY.onChange(scrollFunc);
  }, [pixelsScrolled, scrollY, pos]);

  // console.log('pixelsScrolled: ', lastPixelsScrolled);
  // console.log('_________!!!!!!!!!!!!!!!!!!!!!!!!!!!!____________');

  console.log('isBlockOver', isBlockOver);
  // console.log('inView', inView);

  return (
    <>
      <motion.section id="section4" className="relative"
        // style = {
        // {
        //   height;
        // }
        // }
                      initial="before"
                      whileInView="visible"
      >
        <motion.div
          variants={appearBlockAnimation}
          className="absolute pt-[203px] bg-[#0f1214] w-[97%] h-[100vh] rounded-[20px] left-[1.5%] flex flex-col justify-between"

          // style={inView && !isBlockOver
          //   ? {
          //     position: 'fixed',
          //   }
          //   : {
          //     background: 'red',
          //     position: 'absolute',
          //     top
          //   }
          // }
          // style={{top}}
        >
          <motion.h1 className="text-[54px] font-bold leading-[150%] text-white text-center opacity-0"
                     animate={h1Animation}
          >
            Что тебе даст прохождение курса ?
          </motion.h1>
          <div className="flex justify-center gap-10 mt-[40px] opacity-0">
            <p className="text-[24px] uppercase font-semibold leading-[130%] text-white text-center ">
              Skills upgrade
            </p>
            <p
              className="text-[24px] uppercase font-semibold leading-[130%] text-white text-center opacity-50">
              Strong hard skills
            </p>
          </div>
          <div className="flex justify-center gap-[60px] mt-[108px] opacity-0">
            {blocks}
          </div>
        </motion.div>

      </motion.section>
      <motion.section id="next" className="h-[1000px] bg-red-600 text-3xl text-center mt-[40px]"
        // style={inView && !isBlockOver
        //   ? {
        //     marginTop: '4000px'
        //   }
        //   : {
        //     marginTop: '40px'
        //   }
        // }
      >
        Next block
      </motion.section>
    </>
  );
};

export default Section4;