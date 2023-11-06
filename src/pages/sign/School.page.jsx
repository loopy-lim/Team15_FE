import { BottomFullLink } from "../../components/common/BottomFullLink.component.jsx";
import { Input } from "../../components/sign/Input.component.jsx";
import { SlidePannels } from "../../components/sign/SlidePannel.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";
import { SignInformation } from "../../components/sign/Information.component.jsx";
import { useState } from "react";

export const SchoolPage = () => {
  const [school, setSchool] = useState("");
  const [canNext, setCanNext] = useState(false);

  const handleSchoolChange = (event) => {
    let newSchool = event.target.value;
    if (newSchool.length > 11) {
      newSchool = newSchool.slice(0, 11);
    }

    const isValidSchool = /^[a-zA-Z가-힣0-9]{2,11}$/.test(newSchool);

    setSchool(newSchool);
    setCanNext(isValidSchool);
  };

  return (
    <MainContainer>
      <div className="mt-20">
        <SlidePannels maxLengh={3} selectedIndex={2} />
      </div>

      <div className="flex flex-col items-center">
        <SignInformation title={`당신의 학교를\n알고 싶어요`} />
        <div className="w-3/4">
          <Input
            type="text"
            placeholder="학교명"
            value={school}
            onChange={handleSchoolChange}
          />
        </div>
      </div>

      <BottomFullLink
        title="다음으로"
        to={`/signup/schoolcard`}
        isActive={canNext}
      />
    </MainContainer>
  );
};
