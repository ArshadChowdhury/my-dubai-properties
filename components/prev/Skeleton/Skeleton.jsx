const Skeleton = (props) => {
  return (
    <div
      className={`sm:px-12 md:px-[4.5rem] lg:px-28 xl:px-32 2xl:px-40 flex flex-wrap ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Skeleton;
