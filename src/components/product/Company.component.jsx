import { Txt } from "../common/Txt.component";

/**
 * @param {{
 *  name: string,
 *  imagePath: string,
 * }}
 */
export const ProductCompany = ({ name, imagePath }) => {
  return (
    <div className="flex gap-2">
      <div className="w-16 h-16 rounded-full overflow-hidden border border-[#B5B5B5]">
        <img src={imagePath} alt={name} />
      </div>
      <div className="flex flex-col">
        <Txt typography="h5">{name}</Txt>
        <Txt typography="subtitle" colors="secondaryLight">
          공식 인증 기업
        </Txt>
      </div>
    </div>
  );
};
