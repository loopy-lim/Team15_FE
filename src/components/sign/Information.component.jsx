import { Txt } from "../common/Txt.component.jsx";

/**
 * @param {{
 *  title: string
 * }}
 */
export const SignInformation = ({ title }) => {
  return (
    <>
      <Txt typography="h6" colors="black" className="my-10">
        안녕하세요!
      </Txt>
      <Txt
        typography="h3"
        colors="black"
        className="flex flex-col gap-2 mt-5 mb-20 text-center"
      >
        {title.split("\n").map((line) => {
          return <div key={line}>{line}</div>;
        })}
      </Txt>
    </>
  );
};
