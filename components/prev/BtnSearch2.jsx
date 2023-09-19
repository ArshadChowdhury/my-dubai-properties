import Image from "next/image";

const BtnSearch2 = (props) => (
  <div className="flex h-[46px] md:w-[170px] justify-center items-center bg-[#bea04e] p-[9px] mb-2 hover:text-[#FFD15F] text-white border-t-2 border-b-2 relative ">
    <div className="z-0 absolute w-8 h-8 bg-[#bea04e] border-2 border-white rotate-45 top-[5px] left-[-16px] border-r-0 border-t-0"></div>
    <div className="w-full flex justify-around py-1 px-6 items-center font-bold text-[12px] leading-[150%] tracking-[4%]">
      <span className="z-50 text-shadow">{props.btnText}</span>
      <div className="w-[22px]">
        <Image src={props.btnImage} alt="btn image" />
      </div>
    </div>
    <div className="z-0 absolute w-8 h-8 bg-[#bea04e] border-2 border-white rotate-45 top-[5px] right-[-16px] border-l-0 border-b-0"></div>
  </div>
);

export default BtnSearch2;
