import { Txt } from "../common/Txt.component";

const rankingkeyword = [
  "맥북",
  "맥북프로",
  "맥북에어 m1",
  "맥북에어 m2",
  "맥북에어",
];

export const RankingSearch = () => {
  return (
    <div className="py-8">
      <Txt typography="h4" className="pt-8 pb-4 block">
        <Txt colors="prmiary" typography="h4">
          인기
        </Txt>{" "}
        검색어
      </Txt>
      <div className="flex flex-col gap-4">
        {rankingkeyword.map((keyword, index) => {
          return (
            <button
              key={keyword}
              className="flex gap-1 items-center px-2 w-fit rounded-md"
            >
              {`${index + 1} ${keyword}`}
            </button>
          );
        })}
      </div>
    </div>
  );
};
