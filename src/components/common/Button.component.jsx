import classnames from "classnames";

const sizeType = {
  small: "py-2 px-4 text-sm",
  medium: "py-4 px-8 text-base",
  large: "py-6 px-12 text-lg",
};

const colorType = {
  primary: "bg-[#62AB05] text-white",
  secondary: "bg-[#EAEAEA] text-[#62AB05]",
  white: "bg-white text-[#62AB05]",
};

/**
 * @param {{
 *    children: React.ReactNode,
 *    className: string,
 *    isActive: boolean,
 *    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
 *    size: keyof typeof sizeType,
 *    color: keyof typeof colorType,
 *  }}
 */

export const Button = ({
  children,
  className,
  isActive = true,
  onClick,
  size = "medium",
  color = "primary",
}) => (
  <button
    className={classnames(
      "w-full font-bold rounded-md border border-[#62AB05]",
      sizeType[size],
      isActive ? colorType[color] : colorType["secondary"],
      className
    )}
    disabled={!isActive}
    onClick={onClick}
  >
    {children}
  </button>
);
