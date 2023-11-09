import { BottomFullLink } from "../../components/common/BottomFullLink.component.jsx";
import { Txt } from "../../components/common/Txt.component.jsx";
import { SlidePannels } from "../../components/sign/SlidePannel.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";
import { SignInformation } from "../../components/sign/Information.component.jsx";
import { Icon } from "../../components/common/Icon.component.jsx";
import { useState } from "react";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useAtom } from "jotai";
import {
  emailAtom,
  nameAtom,
  passwordAtom,
  universityAtom,
  universityCardAtom,
} from "../../stores/sign.atom.js";
import { useSignUp } from "../../hooks/useSignQuery.jsx";
import { useNavigate } from "react-router-dom";

export const SchoolCardPage = () => {
  const [universityCard, setUniversityCard] = useAtom(universityCardAtom);
  const [email] = useAtom(emailAtom);
  const [name] = useAtom(nameAtom);
  const [password] = useAtom(passwordAtom);
  const [university] = useAtom(universityAtom);
  const [imageSrc, setImageSrc] = useState("");
  const [canNext, setCanNext] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useSignUp();

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
    });
    alert(image.dataUrl);

    if (image) {
      setCanNext(true);
      setImageSrc(image.dataUrl);
      setUniversityCard(image.dataUrl);
    }
  };

  const onSignUp = () => {
    signUp(
      { email, name, password, university, universityCard },
      { onSettled: () => navigate("/signin") }
    );
  };

  return (
    <MainContainer>
      <div className="mt-20">
        <SlidePannels maxLengh={3} selectedIndex={2} />
      </div>

      <div className="flex flex-col items-center">
        <SignInformation title={`당신의 학교를\n알고 싶어요`} />
        <div className="w-80 h-44 border-2 border-[#62AB05] rounded-xl relative box-content">
          <div className="relative w-80 h-44 overflow-hidden rounded-xl">
            <img
              className="absolute top-1/2 -translate-y-1/2 object-cover scale-125"
              src={imageSrc}
            />
          </div>
          <img
            className="absolute top-1/2 -translate-y-1/2 object-cover opacity-20 scale-125"
            src={imageSrc}
          />
        </div>
        <button
          className="border border-gray-400 rounded-full p-2 mt-28 z-20"
          onClick={takePicture}
        >
          <Icon type="camera" />
        </button>
        <Txt typography="subtitle" colors="secondaryLight" className="my-3">
          학생증을 촬영해주세요
        </Txt>
      </div>

      <BottomFullLink
        title="인증하기"
        onClick={onSignUp}
        isActive={canNext}
        to="#"
      />
    </MainContainer>
  );
};
