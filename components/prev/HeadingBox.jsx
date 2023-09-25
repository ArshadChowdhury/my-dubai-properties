import { useStateValue } from "./states/StateProvider";

const HeadingBox = (props) => {
  const [{ lang }] = useStateValue();
  return (
    <div
      className={`px-4 xl:px-6 py-1 bg-[#042C51] relative ${props.className}`}
    >
      {lang === "en" ? (
        <div
          className={`h-full w-1 bg-[#F1BF3F] absolute left-0 top-0 animate-pulse ${props.hidden}`}
        ></div>
      ) : (
        <div
          className={`h-full w-1 bg-[#F1BF3F] absolute right-0 top-0 animate-pulse ${props.hidden}`}
        ></div>
      )}

      <h1
        className={`font-roboto text-xl xl:text-2xl text-white ${props.textPosition}`}
      >
        {props.heading}
      </h1>
    </div>
  );
};

export default HeadingBox;
