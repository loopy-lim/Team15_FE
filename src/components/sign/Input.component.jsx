import { useId } from "react";
import { Txt } from "../common/Txt.component";
import classNames from "classnames";

/**
 * @typedef {{
 *  type: "password" | "text"
 *  className: string
 *  label?: string
 * }} InputProps
 *
 * @typedef {React.PropsWithChildren<React.InputHTMLAttributes<HtmlInputElement>> & InputProps} InputPropsWithChildren
 *
 * @param {InputPropsWithChildren} props
 */
export const Input = ({ type = "text", label = "", className, ...props }) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id}>
        <Txt typography="h4" colors="secondaryLight" className="font-normal">
          {label}
        </Txt>
      </label>
      <input
        {...props}
        id={id}
        type={type}
        className={classNames(
          "border-b-2 py-1 my-3 border-[#62AB05]",
          className
        )}
      />
    </div>
  );
};
