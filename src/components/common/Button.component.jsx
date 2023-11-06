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
 * @typedef {{
 *  className? string;
 *  isActive?: boolean;
 *  size?: keyof typeof sizeType;
 *  color?: keyof typeof colorType;
 * }} ButtonProps
 * @typedef {React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement<ButtonProps>>>} ButtonPropsWithChildren
 *
 * @param {ButtonPropsWithChildren} props
 */
export const Button = ({
  children,
  className,
  isActive = true,
  size = "medium",
  color = "primary",
  ...props
}) => (
  <button
    {...props}
    className={classnames(
      "w-full font-bold rounded-md border border-[#62AB05]",
      sizeType[size],
      isActive ? colorType[color] : colorType["secondary"],
      className
    )}
    disabled={!isActive}
  >
    {children}
  </button>
);
