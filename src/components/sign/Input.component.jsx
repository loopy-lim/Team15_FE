import { useId } from "react";
import { Txt } from "../common/Txt.component";

/**
 * @param {{
 *    className: string
 *    label: string
 * }}
 */
export const InputText = ({ className, label }) => {
  return <Input type="text" className={className} label={label} />;
};

/**
 * @param {{
 *   className: string
 *   label: string
 * }}
 */
export const InputPassword = ({ className, label }) => {
  return <Input type="password" className={className} label={label} />;
};

/**
 * @param {{
 *  type: "password" | "text"
 *  className: string
 *  label?: string
 * }}
 */
export const Input = ({ type, className, label = "" }) => {
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
        className={`border-b-2 py-1 my-4 border-[#62AB05] ${className}`}
      />
    </div>
  );
};
