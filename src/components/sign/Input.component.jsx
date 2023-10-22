import { useId } from "react";
import { Txt } from "../common/Txt.component";
import classNames from "classnames";

/**
 * @param {{
 *    className: string
 *    label: string
 * }}
 */
export const InputText = ({ className, label, value, onChange }) => {
  return (
    <Input
      type="text"
      className={className}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};

/**
 * @param {{
 *   className: string
 *   label: string
 * }}
 */
export const InputPassword = ({ className, label, value, onChange }) => {
  return (
    <Input
      type="password"
      className={className}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};

/**
 * @param {{
 *  type: "password" | "text"
 *  className: string
 *  label?: string
 * }}
 */
export const Input = ({ type, className, label = "", value, onChange }) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id}>
        <Txt typography="h4" colors="secondaryLight" className="font-normal">
          {label}
        </Txt>
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={classNames(
          "border-b-2 py-1 my-3border-[#62AB05]",
          className
        )}
      />
    </div>
  );
};
