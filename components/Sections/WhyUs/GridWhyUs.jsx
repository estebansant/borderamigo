import React from "react";

const GridWhyUs = () => {
  return (
    <div className="grid max-w-[1280px] auto-cols-auto auto-rows-auto gap-[24px] gap-y-[11.5px] avg:grid-cols-2 md:grid-cols-3 md:grid-rows-2">
      {/* I couldn't map through an array and se the variables of the array as tailwind classes to change the background image on hover and using a state to manage all the images on mouse enter and on mouse leave wasn't optimal  */}
      {/* card 1 */}
      <article className="flex-column-center h-auto max-h-[332px] w-auto gap-[26px] rounded-[16px] bg-orange p-[16px]">
        <div className="duration-[16000ms] h-[225px] w-full max-w-[332px] rounded-[16px] bg-linearGradient bg-mb1 bg-cover bg-center bg-no-repeat transition-all ease-in-out hover:bg-mb1Hover "></div>
        <h6 className="paragraph text-center text-light-gray">
          The only online all-in-one platform for seamless application
        </h6>
      </article>
      {/* card 2 */}
      <article className="flex-column-center h-auto max-h-[332px] w-auto gap-[26px] rounded-[16px] bg-orange p-[16px]">
        <div className="duration-[16000ms] h-[225px] w-full max-w-[332px] rounded-[16px] bg-linearGradient bg-mb2 bg-cover bg-center bg-no-repeat transition-all ease-in-out hover:bg-mb2Hover "></div>
        <h6 className="paragraph text-center text-light-gray">
          Experienced Visa Specialists
        </h6>
      </article>
      {/* card 3 */}
      <article className="flex-column-center h-auto max-h-[332px] w-auto gap-[26px] rounded-[16px] bg-orange p-[16px]">
        <div className="duration-[16000ms] h-[225px] w-full max-w-[332px] rounded-[16px] bg-linearGradient bg-mb3 bg-cover bg-center bg-no-repeat transition-all ease-in-out hover:bg-mb3Hover "></div>
        <h6 className="paragraph text-center text-light-gray">
          AI- Powered Process
        </h6>
      </article>
      {/* card 4 */}
      <article className="flex-column-center h-auto max-h-[332px] w-auto gap-[26px] rounded-[16px] bg-orange p-[16px]">
        <div className="duration-[16000ms] h-[225px] w-full max-w-[332px] rounded-[16px] bg-linearGradient bg-mb4 bg-cover bg-center bg-no-repeat transition-all ease-in-out hover:bg-mb4Hover "></div>
        <h6 className="paragraph text-center text-light-gray">
          Multilingual consultants
        </h6>
      </article>
      {/* card 5 */}
      <article className="flex-column-center h-auto max-h-[332px] w-auto gap-[26px] rounded-[16px] bg-orange p-[16px]">
        <div className="duration-[16000ms] h-[225px] w-full max-w-[332px] rounded-[16px] bg-linearGradient bg-mb5 bg-cover bg-center bg-no-repeat transition-all ease-in-out hover:bg-mb5Hover "></div>
        <h6 className="paragraph text-center text-light-gray">
          Half the price to get your residence
        </h6>
      </article>
      {/* card 6 */}
      <article className="flex-column-center h-auto max-h-[332px] w-auto gap-[26px] rounded-[16px] bg-orange p-[16px]">
        <div className="duration-[16000ms] h-[225px] w-full max-w-[332px] rounded-[16px] bg-linearGradient bg-mb6 bg-cover bg-center bg-no-repeat transition-all ease-in-out hover:bg-mb6Hover "></div>
        <h6 className="paragraph text-center text-light-gray">
          Highly efficient workflow
        </h6>
      </article>
    </div>
  );
};

export { GridWhyUs };
