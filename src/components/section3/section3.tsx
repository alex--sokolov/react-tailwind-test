import React from 'react';

const Section3 = () => {
  return (
    <section id="section3" className="mt-[140px]">
      <div className="flex items-center flex-col">
        <div className="relative text-3xl text-black font-semibold
         before:content-[''] before:absolute before:-left-[53px] before:bottom-[16px] before:w-[27px]  before:h-[26px]
              before:bg-no-repeat before:bg-[url('../src/assets/img/svg/question-mark.svg')]">
          Как именно ты станешь разработчиком
        </div>
        <div className="mt-[40px] text-[24px] tracking-[.05em] leading-[140%]">
          На курсе ты не просто изучаешь теоретический материал. в процессе изучения<br/>
          ты повторяете за действующим разработчиком, после чего <strong>закрепляешь знания<br/> на заданиях и проектах.</strong>
        </div>
        <div
          className="relative mt-[60px] h-[654px] w-[1410px] bg-[url('../src/assets/img/png/setapper.png')] bg-no-repeat bg-center">
          <div
            className="absolute left-[20px] top-[112px] w-[324px] h-[288px] rounded-[14px] border border-[#947eff] bg-[#fff]">
            <p className="text-[14px] uppercase font-semibold leading-[130%] text-[#9088ff] ml-[20px] mt-[24px]">
              2 Командных проекта
            </p>
            <p className="text-[14px] leading-[170%] text-[##0F1214] ml-[20px] mt-[14px]">
              Симуляция комерческого проекта -<br/>
              получаете ТЗ и организовываете<br/>
              командную разработку. Прокачивая<br/>
              навыки для будущей работы.
            </p>
            <p className="text-[14px] leading-[170%] text-[##0F1214] ml-[20px] mt-[14px]">
              <span className="font-medium">Проекты на тему:</span><br/>
              - JavaScript плагин "Контекстное меню"<br/>
              - Cайт на React, презентующий команду<br/>
              участников
            </p>
          </div>

          <div
            className="absolute -right-[6px] top-[215px] w-[390px] h-[416px] rounded-[14px] border border-[#947eff] bg-[#fff]">
            <p className="text-[14px] uppercase font-semibold leading-[130%] text-[#9088ff] ml-[20px] mt-[24px]">
              Индивидуальные проекты
            </p>
            <p className="text-[14px] leading-[170%] text-[##0F1214] ml-[20px] mt-[14px]">
              Чтобы свободно чуствовать себя на позиции<br/>
              junior необходим опыт разработки.<br/>
              Вы создадите 3 проекта изучая материал от<br/>
              простого к сложному:<br/><br/>
              1. Проект корзина с товарами для интернет-<br/>
              магазина<br/>
              2. Социальная сеть для поиска и знакомств<br/>
              3.Дипломный проект на выбранную вами тему:<br/>
              - Учет доходов и рассходов<br/>
              - Бронирование отелей<br/>
              - Интернет-магазин или  схожий по сложности<br/>
              проект, которым вы выберети и утвердите с<br/>
              куратором
            </p>
          </div>
        </div>
        <p className="text-[13px] font-[#0F1214] leading-[150%] mt-4 mb-[89px]" >
          Проекты учеников
        </p>
      </div>
    </section>
  );
};

export default Section3;