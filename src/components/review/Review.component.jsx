import { Txt } from "../common/Txt.component";

export const Review = ({ productId }) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <Txt typography="h2">물건은 잘 사용하셨나요?</Txt>
      <textarea
        className="border border-[#62AB05] rounded-lg w-full h-32 resize-none p-4"
        placeholder="후기를 입력해주세요 :-)"
        cols={16}
      />
    </div>
  );
};
