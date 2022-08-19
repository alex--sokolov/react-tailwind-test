import React, { useEffect, useRef, useState } from 'react';
import { IData, ISection4 } from '../../interfaces';
import Parser from 'html-react-parser';
import { generateKey } from '../../utils/generateKey';
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion';

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

  // const sectionHeight = (1000 - document.documentElement.clientHeight) > 0
  //   ? 4000
  //   : document.documentElement.clientHeight * 4;

  const { ref, inView } = useInView(
    {
      threshold: [0.25],
      // rootMargin: `-${document.documentElement.clientHeight / 2}px`
      // delay: 1000,
      // trackVisibility: true,
      //   // delay: 1,
      //   // rootMargin: '200px'
    });


  const [isBlockOver, setIsBlockOver] = useState(false);
  const [pos, setPos] = useState(0);
  const [stage, setStage] = useState(1);


  console.log('pos:', pos);

  const h = document.documentElement.clientHeight;
  const posEnd = pos + 4 * h;

  let scrollThreshold = [
    pos,
    pos + 3*h
  ];
  let scrollThreshold1 = [
    pos,
    pos + h/5
  ];
  let scrollThreshold2 = [
    pos + h/5,
    pos + 2*h/5
  ];
  let scrollThreshold3 = [
    pos + 2*h/5,
    pos + 3*h/5
  ];
  let scrollThreshold4 = [
    pos + 2.25*h/5,
    pos + 3.25*h/5
  ];
  let scrollThreshold5 = [
    pos + 2.5*h/5,
    pos + 3.5*h/5
  ];
  let scrollThreshold6 = [
    pos + 4.5*h/5,
    pos + 5.5*h/5
  ];
  let scrollThreshold7 = [
    pos + 4.75*h/5,
    pos + 5.75*h/5
  ];
  let scrollThreshold8 = [
    pos + h,
    pos + 6*h/5
  ];

  let scrollThreshold9 = [
    pos + 6*h/5,
    pos + 7*h/5
  ];

  let scrollThreshold10 = [
    pos + 7*h/5,
    pos + 8*h/5
  ];
  let scrollThreshold11 = [
    pos + 8.25*h/5,
    pos + 9.25*h/5
  ];

  let scrollThreshold12 = [
    pos + 8.5*h/5,
    pos + 9.5*h/5
  ];

  let scrollThreshold13 = [
    pos + 10.5*h/5,
    pos + 11.5*h/5
  ];
  let scrollThreshold14 = [
    pos + 10.75*h/5,
    pos + 11.75*h/5
  ];

  let scrollThreshold15 = [
    pos + 11*h/5,
    pos + 12*h/5
  ];

  let scrollThreshold16 = [
    pos + 12*h/5,
    pos + 13*h/5
  ];

  let scrollThreshold17 = [
    pos + 13*h/5,
    pos + 14*h/5
  ];


  const h1Animation = useAnimation();
  const tabsAnimation = useAnimation();
  let { scrollY } = useScroll();
  let scrollYOnDirectionChange = useRef(scrollY.get());
  let lastPixelsScrolled = useRef(0);
  let lastScrollDirection = useRef('down');
  let pixelsScrolled = useMotionValue(0);
  let heightSection = useTransform(pixelsScrolled, scrollThreshold, [100, 400]);
  let topSection = useTransform(pixelsScrolled, scrollThreshold, [0, 300]);
  let height = useMotionTemplate`${heightSection}vh`;
  let top = useMotionTemplate`${topSection}vh`;

  let h1Opacity1 = useTransform(pixelsScrolled, scrollThreshold1, [0, 1]);
  let h1Top1 = useTransform(pixelsScrolled, scrollThreshold1, [30, 10]);
  let h1Opacity2 = useTransform(pixelsScrolled, scrollThreshold17, [1, 0]);
  let h1Top2 = useTransform(pixelsScrolled, scrollThreshold17, [10, 30]);
  let tabOpacity1 = useTransform(pixelsScrolled, scrollThreshold2, [0, 1]);
  let tabOpacity2 = useTransform(pixelsScrolled, scrollThreshold16, [1, 0]);
  let tabTranslateX = useTransform(pixelsScrolled, scrollThreshold9, [120, -120]);
  const tabTranslateXYVH = useMotionTemplate`calc(50% + ${tabTranslateX}px)`;


  const tabOpacity = stage < 3 ? tabOpacity1 : tabOpacity2;
  const h1Opacity = stage < 3 ? h1Opacity1 : h1Opacity2;
  const h1Top = stage < 3 ? h1Top1 : h1Top2;
  const h1TopVH = useMotionTemplate`${h1Top}vh`;

  let item1Opacity = useTransform(pixelsScrolled, scrollThreshold3, [0, 1]);
  let item1TranslateY = useTransform(pixelsScrolled, scrollThreshold3, [0, -10]);
  const item1TranslateYVH = useMotionTemplate`${item1TranslateY}vh`;
  let item2Opacity = useTransform(pixelsScrolled, scrollThreshold4, [0, 1]);
  let item2TranslateY = useTransform(pixelsScrolled, scrollThreshold4, [0, -10]);
  const item2TranslateYVH = useMotionTemplate`${item2TranslateY}vh`;
  let item3Opacity = useTransform(pixelsScrolled, scrollThreshold5, [0, 1]);
  let item3TranslateY = useTransform(pixelsScrolled, scrollThreshold5, [0, -10]);
  const item3TranslateYVH = useMotionTemplate`${item3TranslateY}vh`;

  let item1Opacity2 = useTransform(pixelsScrolled, scrollThreshold6, [1, 0]);
  let item1TranslateY2 = useTransform(pixelsScrolled, scrollThreshold6, [-10, 0]);
  const item1TranslateY2VH = useMotionTemplate`${item1TranslateY2}vh`;
  let item2Opacity2 = useTransform(pixelsScrolled, scrollThreshold7, [1, 0]);
  let item2TranslateY2 = useTransform(pixelsScrolled, scrollThreshold7, [-10, 0]);
  const item2TranslateY2VH = useMotionTemplate`${item2TranslateY2}vh`;
  let item3Opacity2 = useTransform(pixelsScrolled, scrollThreshold8, [1, 0]);
  let item3TranslateY2 = useTransform(pixelsScrolled, scrollThreshold8, [-10, 0]);
  const item3TranslateY2VH = useMotionTemplate`${item3TranslateY2}vh`;

  let item4Opacity = useTransform(pixelsScrolled, scrollThreshold10, [0, 1]);
  let item4TranslateY = useTransform(pixelsScrolled, scrollThreshold10, [0, -10]);
  const item4TranslateYVH = useMotionTemplate`${item4TranslateY}vh`;
  let item5Opacity = useTransform(pixelsScrolled, scrollThreshold11, [0, 1]);
  let item5TranslateY = useTransform(pixelsScrolled, scrollThreshold11, [0, -10]);
  const item5TranslateYVH = useMotionTemplate`${item5TranslateY}vh`;
  let item6Opacity = useTransform(pixelsScrolled, scrollThreshold12, [0, 1]);
  let item6TranslateY = useTransform(pixelsScrolled, scrollThreshold12, [0, -10]);
  const item6TranslateYVH = useMotionTemplate`${item6TranslateY}vh`;

  let item4Opacity2 = useTransform(pixelsScrolled, scrollThreshold13, [1, 0]);
  let item4TranslateY2 = useTransform(pixelsScrolled, scrollThreshold13, [-10, 0]);
  const item4TranslateY2VH = useMotionTemplate`${item4TranslateY2}vh`;
  let item5Opacity2 = useTransform(pixelsScrolled, scrollThreshold14, [1, 0]);
  let item5TranslateY2 = useTransform(pixelsScrolled, scrollThreshold14, [-10, 0]);
  const item5TranslateY2VH = useMotionTemplate`${item5TranslateY2}vh`;
  let item6Opacity2 = useTransform(pixelsScrolled, scrollThreshold15, [1, 0]);
  let item6TranslateY2 = useTransform(pixelsScrolled, scrollThreshold15, [-10, 0]);
  const item6TranslateY2VH = useMotionTemplate`${item6TranslateY2}vh`;


  let tab1Opacity = useTransform(pixelsScrolled, scrollThreshold9, [0.5, 1]);
  let tab2Opacity = useTransform(pixelsScrolled, scrollThreshold9, [1, 0.5]);


  // let tabTranslateY = useTransform(pixelsScrolled, scrollThreshold2, [0, -180]);

  // console.log('height: ', height);
  // console.log('top: ', top);
  console.log('stage', stage);
  const tabElements = stage < 3 ? section4.slice(0, 3) : section4.slice(3, 6);
  let blocks = tabElements.map((item: ISection4, index: number) => {
    const img = getBenefitImage(item.icon);

    const getOpacity = () => {
      if (stage === 1) {
        switch (index) {
          case 0:
            return item1Opacity;
          case 1:
            return item2Opacity;
          case 2:
            return item3Opacity;
        }
      }
      if (stage === 2) {
        switch (index) {
          case 0:
            return item1Opacity2;
          case 1:
            return item2Opacity2;
          case 2:
            return item3Opacity2;
        }
      }

      if (stage === 3) {
        switch (index) {
          case 0:
            return item4Opacity;
          case 1:
            return item5Opacity;
          case 2:
            return item6Opacity;
        }
      }

      if (stage === 4) {
        switch (index) {
          case 0:
            return item4Opacity2;
          case 1:
            return item5Opacity2;
          case 2:
            return item6Opacity2;
        }
      }

      return 0;
    };

    const getTranslateY = () => {
      if (stage === 1) {
        switch (index) {
          case 0:
            return item1TranslateYVH;
          case 1:
            return item2TranslateYVH;
          case 2:
            return item3TranslateYVH;
        }
      }
      if (stage === 2) {
        switch (index) {
          case 0:
            return item1TranslateY2VH;
          case 1:
            return item2TranslateY2VH;
          case 2:
            return item3TranslateY2VH;
        }
      }
      if (stage === 3) {
        switch (index) {
          case 0:
            return item4TranslateYVH;
          case 1:
            return item5TranslateYVH;
          case 2:
            return item6TranslateYVH;
        }
      }
      if (stage === 4) {
        switch (index) {
          case 0:
            return item4TranslateY2VH;
          case 1:
            return item5TranslateY2VH;
          case 2:
            return item6TranslateY2VH;
        }
      }
      return 0;
    };

    const opacity = getOpacity();
    const translateY = getTranslateY();

    return (
      <motion.div
        className="flex items-center flex-col"
        key={generateKey(index)}
        style={{ opacity, translateY }}
      >
        <div className=""><img src={img} alt=""/></div>
        <div className="text-[21px] font-medium leading-[130%] text-white text-center pt-[30px]">
          {Parser(item.text)}
        </div>
      </motion.div>
    );
  });

  useEffect(() => {
    blocks = section4.map((item: ISection4, index: number) => {
      const img = getBenefitImage(item.icon);
      return (
        <div className="flex items-center flex-col" key={generateKey(index)}>
          <div className=""><img src={img} alt=""/></div>
          <div
            className="text-[21px] font-medium leading-[130%] text-white text-center pt-[30px]">
            {Parser(item.text)}
          </div>
        </div>
      );
    });
  }, [tab]);

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

      if (newPixelsScrolled >= scrollThreshold[1]) {
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

    if (pixelsScrolled.get() < scrollThreshold[0] || pixelsScrolled.get() > scrollThreshold[1]) return;
    const diff = pixelsScrolled.get() - scrollThreshold[0];
    console.log('diff: ', diff);
    if (diff > 400 && diff <= 700) {
      setStage(1);
    }
    if (diff > 900 && diff <= 1200) {
      setStage(2);
    }

    if (diff > 1700 && diff <= 1900) {
      setStage(3);
    }

    if (diff > 2100 && diff <= 2300) {
      setStage(4);
    }

    // if (isScrollingDown) {
    //   if (diff > 400) {
    //     tabsAnimation.start({
    //       opacity: 1,
    //       y: -180,
    //       transition: {
    //         opacity: { duration: 1 },
    //         y: { delay: 1,duration: 1}
    //       }
    //     });
    //   }
    // }
    // if (!isScrollingDown) {
    //   if (diff <= 400) {
    //     tabsAnimation.start({
    //       opacity: 0,
    //       y: 0,
    //       transition: {
    //         type: 'spring', duration: 1
    //       }
    //     });
    //   }
    // }
  };

  // const h1Animation = {
  //   initial: {
  //     opacity: 0,
  //     y: 0,
  //     transition: {
  //       type: 'spring', duration: 1
  //     }
  //   },
  //   start: {
  //     opacity: 1,
  //     y: -80,
  //     transition: {
  //       opacity: {
  //         duration: 1,
  //       },
  //       y: {
  //         delay: 1,
  //         duration: 1,
  //       }
  //     }
  //   }
  // };


  // const appearBlockAnimation = {
  //   before: {
  //     y: 300
  //   },
  //   visible: {
  //     y: 0,
  //     transition: { duration: 1 },
  //   },
  //   exit: {
  //     y: 0,
  //     opacity: 1
  //   },
  // };


  useEffect(() => {
    const current = scrollY.get();
    // console.log('------------------------------------------------------------');
    // console.log('scrollY.latest: ', scrollY.getPrevious());
    // console.log('scrollY.get: ', scrollY.get());
    // console.log('scrollYOnDirectionChange: ', scrollYOnDirectionChange);
    // console.log(' lastPixelsScrolled: ', lastPixelsScrolled);
    // console.log(' scrollThreshold[0]: ', scrollThreshold[0]);
    // console.log(' scrollThreshold[1]: ', scrollThreshold[1]);
    // console.log(' pixelsScrolled: ', pixelsScrolled);
    // console.log('current: ',current);
    if (pos === 0) {
      setPos(current);
    }

    if (inView && current < posEnd) {
      setIsBlockOver(false);
    }

    console.log('current ', current);
    console.log('posEnd ', posEnd);
    console.log('inside use effect, inView = ', inView);
  }, [inView]);


  useEffect(() => {
    if (pos === 0) {
      return;
    }
    return scrollY.onChange(scrollFunc);
  }, [pixelsScrolled, scrollY, pos]);

  const refInner = useRef(null);
  return (
    <>
      <section id="section4" ref={ref} className="overflow-y-hidden" style={{  height: 4*h }}>
        <motion.div className="relative"
                    style={{ height }}
          // layout
          // initial="before"
          // whileInView="visible"
          // exit="exit"
          // viewport={{
          //   amount: 0.1,
          // }}
        >
          <AnimatePresence>
            <motion.div
              ref={refInner}
              layout
              // variants={appearBlockAnimation}
              className="sticky  pt-[203px] bg-[#0f1214] w-[97%] h-[90vh] rounded-[20px] bottom-[5vh] left-[1.5%] flex flex-col justify-between"
              // style={{ top }}

              style={inView
                ? !isBlockOver ? {
                    position: 'fixed',
                    top: '5vh'
                  }
                  : {
                    position: 'relative',
                    top: '305vh'
                  }
                : !isBlockOver
                  ? {
                    position: 'sticky',
                    top: '305vh',
                    bottom: '5vh'
                  }
                  : {
                    position: 'sticky',
                    top: '305vh',
                    bottom: '5vh'
                  }
              }

            >
              <motion.h1 className="absolute w-full text-[54px] font-bold leading-[150%] text-white text-center
              left-[50%] translate-x-[-50%]"
                         style={{ opacity: h1Opacity, top: h1TopVH }}
              >
                Что тебе даст прохождение курса ?
              </motion.h1>
              <motion.div className="absolute w-full flex justify-center gap-10 opacity-0 top-[25vh]"
                          style={{ opacity: tabOpacity, translateX: tabTranslateX }}
              >
                <motion.p className="text-[24px] uppercase font-semibold leading-[130%] text-white text-center "
                          style={{ opacity: tab1Opacity }}
                >
                  Skills upgrade
                </motion.p>
                <motion.p
                  className="text-[24px] uppercase font-semibold leading-[130%] text-white text-center"
                  style={{ opacity: tab2Opacity }}
                >
                  Strong hard skills
                </motion.p>
              </motion.div>
              <div className="absolute w-full flex justify-center gap-[60px] top-[50vh]">
                {blocks}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>
      <motion.section id="next" className="h-[1000px] bg-red-600 text-3xl text-center mt-[50px]"
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
