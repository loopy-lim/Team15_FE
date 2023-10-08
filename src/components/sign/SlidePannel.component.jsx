import classnames from "classnames";

/**
 *
 * @param {{
 *  maxLengh: number;
 *  selectedIndex: number;
 * }}
 */
export const SlidePannels = ({ maxLengh = 3, selectedIndex = 0 }) => {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: maxLengh }, (_, i) => {
        return <SlidePannel isSelect={i === selectedIndex} />;
      })}
    </div>
  );
};

/**
 * @param {{
 *  isSelect: boolean
 * }}
 */
export const SlidePannel = ({ isSelect }) => {
  const selectedClassName = "bg-[#62AB05]";
  const nonSelectedClassName = "bg-[#D9D9D9]";
  return (
    <div
      className={classnames(
        "w-8 h-1",
        isSelect ? selectedClassName : nonSelectedClassName
      )}
    />
  );
};
