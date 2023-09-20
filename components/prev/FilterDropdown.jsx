const FilterDropdown = (props) => {
  return (
    <div className="absolute z-[100] w-[325px] md:w-[170px] px-3 border-top-white bg-gradient-to-r from-[#000F1D]  via-[#00182E] to-[#000F1D] h-[130px] -ml-10 md:-ml-3 mt-[6px]">
      <div className="w-full h-full text-start text-[10.6px] text-white overflow-y-scroll scrollbar-thin  scrollbar-thumb-rounded scrollbar-track-gray-500/10 scrollbar-thumb-[#FFFF]/30">
        {/* <Scrollbars
          renderTrackVertical={({ style }) => (
            <div
              className="absolute right-0 top-0 bottom-0 w-1 bg-gray-200 rounded"
              style={style}
            />
          )}
          renderThumbVertical={({ style }) => (
            <div className="w-7 bg-gray-700 rounded" style={style} />
          )}> */}
        <div className="p-3 space-y-2">
          {props?.content
            ?.filter((content) => {
              const searchValue = props.inputValue.toLowerCase();
              const name = content.name ? content.name.toLowerCase() : "";
              const areaName = content.areaName
                ? content.areaName.toLowerCase()
                : "";
              const contentValue = content.toString().toLowerCase();
              return (
                name.includes(searchValue) ||
                areaName.includes(searchValue) ||
                contentValue.includes(searchValue)
              );
            })
            .map((content, idx) => {
              return (
                <p
                  className={`cursor-pointer hover:text-[#dcb558] shadow-sm ${
                    content === props.selectedValue ? "selected" : ""
                  }`}
                  key={idx}
                  onClick={() => props.handleOptionSelect(content)}
                >
                  {content.name || content.areaName || content}
                </p>
              );
            })}
        </div>
        {/* </Scrollbars> */}
      </div>
    </div>
  );
};

export default FilterDropdown;
