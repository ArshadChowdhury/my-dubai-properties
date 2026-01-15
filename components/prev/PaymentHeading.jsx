// import { useStateValue } from "./states/StateProvider";

// const PaymentHeading = (props) => {
//   const [{ lang }] = useStateValue();
//   return lang === "en" ? (
//     <div className="text-white relative p-1 group z-20">
//       <span className="absolute w-[20px] h-[32px] -left-[10px] bg-[#000F1D] z-20"></span>
//       <div className="flex justify-around text-[12px] font-semibold items-center relative btn-explore px-8 py-2 before:!border-2 after:!border-2 before:!border-l-0 after:!border-l-0 before:!border-[#F1BF3F] after:!border-[#F1BF3F]">
//         <span className="btn-explore-text">{props.title}</span>
//       </div>
//       <span className="absolute pulse3 z-30 left-1 -top-[1px] border rounded w-[6px] h-[50px] bg-[#ffd15f]"></span>
//     </div>
//   ) : (
//     <div className="text-white relative p-1 group z-20">
//       <span className="absolute w-[20px] h-[32px] -right-[10px] bg-[#000F1D] z-20"></span>
//       <div className="flex justify-around text-[12px] font-semibold items-center relative btn-explore px-8 py-2 before:!border-2 after:!border-2 before:!border-r-0 after:!border-r-0 before:!border-[#F1BF3F] after:!border-[#F1BF3F]">
//         <span className="btn-explore-text">{props.title}</span>
//       </div>
//       <span className="absolute pulse3 z-30 right-1 -top-[1px] border rounded w-[6px] h-[50px] bg-[#ffd15f]"></span>
//     </div>
//   );
// };

// export default PaymentHeading;


import { useStateValue } from "./states/StateProvider";

const PaymentHeading = (props) => {
  const [{ lang }] = useStateValue();
  
  return (
    <div className="text-white relative group">
      {/* Left/Right connector based on language */}
      <span 
        className={`absolute w-5 h-8 bg-[#000F1D] z-10 top-1/2 -translate-y-1/2 ${
          lang === "en" ? "-left-2.5" : "-right-2.5"
        }`}
      />
      
      {/* Main button */}
      <div className={`
        relative px-10 py-3 
        border-2 border-[#F1BF3F] 
        ${lang === "en" ? "border-l-0" : "border-r-0"}
        bg-gradient-to-r from-[#000F1D] to-transparent
        hover:from-[#F1BF3F]/10 hover:to-transparent
        transition-all duration-300
        group-hover:shadow-lg group-hover:shadow-[#F1BF3F]/20
      `}>
        <span className="text-sm font-semibold tracking-wide">
          {props.title}
        </span>
      </div>
      
      {/* Animated accent line */}
      <span 
        className={`
          absolute top-0 w-2 h-full 
          bg-gradient-to-b from-[#ffd15f] via-[#F1BF3F] to-transparent
          animate-pulse
          ${lang === "en" ? "left-0" : "right-0"}
        `}
      />
    </div>
  );
};

export default PaymentHeading;