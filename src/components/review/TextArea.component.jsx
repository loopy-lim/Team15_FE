import { useState } from "react";
import { Txt } from "../common/Txt.component";
import classnames from "classnames";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { reviewText } from "../../stores/review.atom";

export const ReviewTextArea = () => {
  const [isOverText, setIsOverText] = useState(false);
  const [textLength, setTextLength] = useState(0);
  const [text, setText] = useAtom(reviewText);

  useEffect(() => {
    setTextLength(text.length);
  }, [text]);

  return (
    <div className="w-full relative">
      <textarea
        className={classnames(
          "border rounded-lg w-full h-44 resize-none p-4",
          isOverText ? "border-red-500" : "border-[#62AB05]"
        )}
        value={text}
        placeholder="후기를 입력해주세요 :-)"
        cols={16}
        onChange={(e) => {
          setText(e.target.value);
          setIsOverText(false);
          if (e.target.value.length > 150) {
            setText(e.target.value.slice(0, 150));
            setIsOverText(true);
          }
        }}
      />
      <div className="absolute bottom-4 right-4">
        <Txt
          typography="subtitle"
          colors="prmiary"
          className={classnames("font-thin", { "text-red-500": isOverText })}
        >
          {textLength}
        </Txt>
        <Txt typography="subtitle" className="font-thin">
          /150
        </Txt>
      </div>
    </div>
  );
};
