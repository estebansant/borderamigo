import React from "react";

const Step6 = () => {
  return (
    <div className="relative flex h-[198px] w-full max-w-[752px] items-center justify-center gap-[24px] avg:h-auto">
      <div className="flex flex-col items-center justify-center gap-[16px]">
        <div className="flex-center h-[40px] w-[40px] rounded-[100%] bg-mint">
          <p className="text-center font-OpenSans text-[1.5rem] font-semibold leading-[150%] text-white">
            6
          </p>
        </div>
      </div>

      <div className="absolute left-0 top-0 flex w-[135px] max-w-[324px] flex-col items-end justify-center gap-[8px] avg:w-full">
        <div className="flex flex-col items-end justify-center gap-[4px]">
          <p className="mini-bold text-right uppercase text-white ">Step 6</p>
          <h3 className="h5-bold text-right text-white">Collect the visa</h3>
        </div>
        <p className="small-paragraph max-w-[324px] text-right text-gray">
          Pick up your approved Digital Nomad Spanish visa, ready to begin your
          life in Spain.
        </p>
      </div>
    </div>
  );
};

export { Step6 };
