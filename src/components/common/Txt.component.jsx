import classnames from "classnames";

const typographyType = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-bold",
  h6: "text-base font-bold",
  p: "text-base",
  subtitle: "text-sm",
};

const colorsType = {
  black: "text-black",
  secondary: "text-[#B4B4B4]",
  secondaryLight: "text-[#707070]",
  prmiary: "text-[#62AB05]",
};

/**
 * @param {{
 *  typography: keyof typeof typographyType,
 *  colors: keyof typeof colorsType,
 *  children: React.ReactNode
 *  className: string
 * }}
 * */
export const Txt = ({
  typography = "p",
  colors = "black",
  children,
  className,
}) => {
  return (
    <span
      className={classnames(
        typographyType[typography],
        colorsType[colors],
        className
      )}
    >
      {children}
    </span>
  );
};
