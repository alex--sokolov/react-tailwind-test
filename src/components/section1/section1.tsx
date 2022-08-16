import React from 'react';

const Section1 = () => {

  return (
    <section id="section1">
      <div
        className="absolute top-[99px] ml-[182.5px] bg-[#7b72fe] 3xl:w-[1760px] w-full h-[680px] rounded-tl-[50px] rounded-bl-[50px]
        border-2 border-red-600">
        <div className="relative w-full h-full">
          <div className="absolute w-[831px] h-[601px] ml-[969.5px] bottom-0 z-30">
            <div className="relative w-full h-full">
              <div className="absolute w-[831px] h-[601px] bottom-0 bg-cover bg-[url('../src/assets/img/png/javascript-anim.png')]">
              </div>
              <div className="dots before: content-[''] absolute -left-[46px] -top-[46px] w-[132px] h-[132px]
              [mask:url('../src/assets/img/svg/background-dots.svg')_no-repeat] [mask-size:contain] bg-[#9088ff] -z-20">
              </div>
              <div className="absolute -left-[46px] bottom-[75px] w-[76px] h-[76px] rounded-[24px] bg-[#7f76ff] shadow-[0_4px_4px_1px_rgba(0,0,0,0.3)]
              bg-no-repeat bg-[url('../src/assets/img/png/command-line.png')] bg-center z-10 ">
              </div>
              <div className="absolute -left-[100px] -bottom-[64px] w-[396px] h-[166px] rounded-[24px] bg-[#fff] z-0
              shadow-[0_5px_50px_0_rgba(0,0,0,0.15)] text-base pt-10 pl-5 pr-6">
                <span className='text-[#ed7138]'> Обучение</span> для тех, <span className='text-[#979ea2]'>
                кто готов учиться 10 <br /> часов в неделю</span>,<span className='text-[#ed7138]'> чтобы получить результат</span>.<br />
                Мы даем <span className='text-[#979ea2]'>необходимые навыки</span> на<br /> продвинутом уровне,
                <span className='text-[#979ea2]'> убирая все лишнее</span>
              </div>
            </div>
          </div>


          <div className="absolute top-0 left-0 z-10">
            <h1 className="text-3xl font-semibold text-white ml-[95px] mt-[67px]">
              Профессия<br/>
              Frontend — разработчик
            </h1>
            <h2 className="text-2xl font-semibold text-white ml-[95px] mt-[40px]">
              Стань с нуля продвинутым Junior разработчиком<br/>
              за 7 месяцев с знанием технологий больше, чем<br/>
              у других кандидатов
            </h2>
            <p className="font-[18px] tracking-[.05em] leading-[150%] font-semibold text-white ml-[95px] mt-[26px]">
              Начиная с основ изучишь JavaScript, разберешься с самыми популярными<br/>
              технологиями, научишься писать Frontend на фреймворке и связывать его с<br/>
              Backend. Навыки после курса оцениваются от 100 т.р.
            </p>
            <button
              className="w-[325px] h-[74px] rounded-[51px] p-[28px 40px] font-[18px] text-white ml-[95px] mt-[60px] bg-[#ed7138]">
              Задать вопрос об обучении
            </button>
          </div>
          <div
            className="absolute bottom-0 ml-[123px] w-[1040px] h-[309px] bg-no-repeat bg-[url('../src/assets/img/png/circles.png')] z-0">
          </div>

          <div className="content-[''] absolute -left-[66px] -bottom-[46px] w-[132px]  h-[132px]
              bg-no-repeat bg-[url('../src/assets/img/jpg/background-dots.jpg')] -z-10">
          </div>


        </div>
      </div>
    </section>
  );
};

export default Section1;