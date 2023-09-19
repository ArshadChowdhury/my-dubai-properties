import Image from "next/image";

const BtnSearch = (props) => {
  const onButtonClick = (e) => {};
  return (
    <button
      className="basis-1/3 px-5 text-white text-[10px] relative btn-search my-1 ml-2 w-[320px] md:w-[180px]"
      onClick={onButtonClick}
    >
      <div className="w-full py-4 flex justify-between px-2 items-center font-bold text-[12px] leading-[150%] tracking-[4%]">
        <span className="z-50 text-shadow ">{props.btnText}</span>
        <div className="w-[22px] ">
          <Image src={props.btnImage} alt="btn image" className="" />
        </div>
      </div>
    </button>
  );
};

export default BtnSearch;
