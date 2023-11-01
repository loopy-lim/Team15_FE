import { Txt } from "../common/Txt.component";

const recommandKeywords = [
  "미분적분학",
  "갤럭시 버즈2 프로",
  "LG 그램 15",
  "에어팟 프로 2",
  "LG 그램 16",
];

export const RecommandSearch = () => {
  return (
    <div className="py-8">
      <Txt typography="h4" className="py-2 block">
        추천 검색어
      </Txt>
      <div className="flex flex-wrap gap-2">
        {recommandKeywords.map((keyword) => {
          return (
            <button
              key={keyword}
              className="flex gap-1 items-center px-2 w-fit border border-[#E4E4E4] bg-[#E4E4E4] rounded-md"
            >
              {keyword}
            </button>
          );
        })}
      </div>
    </div>
  );
};
