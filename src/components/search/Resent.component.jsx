import { Icon } from "../common/Icon.component";
import { Txt } from "../common/Txt.component";

const resentKeywords = [
  "맥푹 프로",
  "갤럭시S23",
  "LG 그램 16",
  "에어팟 프로 2",
  "공학 수학",
];
export const ResentSearch = () => {
  return (
    <div className="py-8">
      <Txt typography="h4" className="py-2 block">
        최근 검색어
      </Txt>
      <div className="flex flex-wrap gap-2">
        {resentKeywords.map((keyword) => {
          return (
            <div
              key={keyword}
              className="flex gap-1 items-center px-2 w-fit border border-black rounded-md"
            >
              <button>{keyword}</button>
              <button>
                <Icon type="close" size="small" className="fill-gray-500" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
