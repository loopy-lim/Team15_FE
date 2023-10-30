import { useId } from "react";
import { Txt } from "../common/Txt.component";
import classNames from "classnames";

/**
 * @param {{
 *    className: string
 *    label: string
 * }}
 */
export const InputText = ({ className, label }) => {
  return (
    <Input type="text" className={className} label={label} maxLength={10} />
  );
};

/**
 * @param {{
 *   className: string
 *   label: string
 * }}
 */
export const InputPassword = ({ className, label }) => {
  return (
    <Input type="password" className={className} label={label} maxLength={10} />
  );
};

/**
 * @param {{
 *  type: "password" | "text"
 *  className: string
 *  label?: string
 *  maxLength: number
 *  onChange: (newValue: string) => void
 * }}
 */
export const Input = ({ type, className, maxLength, onChange, label = "" }) => {
  const id = useId();

  const handleInputChange = (event) => {
    let newValue = event.target.value;

    if (newValue.length > maxLength) {
      // 길이가 최대값을 넘어가면 입력을 제한
      newValue = newValue.slice(0, maxLength);
    }

    onChange(newValue);
  };

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
        onChange={handleInputChange}
        maxLength={maxLength}
        className={classNames(
          "border-b-2 py-1 my-3 border-[#62AB05]",
          className
        )}
      />
    </div>
  );
};
