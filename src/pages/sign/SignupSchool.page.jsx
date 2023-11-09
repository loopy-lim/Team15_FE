import { BottomFullLink } from "../../components/common/BottomFullLink.component.jsx";
import { Input } from "../../components/sign/Input.component.jsx";
import { SlidePannels } from "../../components/sign/SlidePannel.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";
import { SignInformation } from "../../components/sign/Information.component.jsx";
import { useSetAtom } from "jotai";
import { universityAtom } from "../../stores/sign.atom.js";
import { useEffect } from "react";

const universities = ["전남대학교", "부산대학교"];

export const SchoolPage = () => {
  const setUniversity = useSetAtom(universityAtom);

  useEffect(() => {
    setUniversity(universities[0]);
  }, []);

  return (
    <MainContainer>
      <div className="mt-20">
        <SlidePannels maxLengh={3} selectedIndex={2} />
      </div>

      <div className="flex flex-col items-center">
        <SignInformation title={`당신의 학교를\n알고 싶어요`} />
        <select
          className="text-2xl"
          onSelect={(e) => {
            setUniversity(e.target.value);
          }}
        >
          {universities.map((university) => (
            <option key={university} value={university}>
              {university}
            </option>
          ))}
        </select>
      </div>

      <BottomFullLink title="다음으로" to={`/signup/schoolcard`} />
    </MainContainer>
  );
};
