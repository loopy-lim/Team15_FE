import { BottomFullLink } from "../../components/common/BottomFullLink.component.jsx";
import { Txt } from "../../components/common/Txt.component.jsx";
import { SlidePannels } from "../../components/sign/SlidePannel.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";
import { SignInformation } from "../../components/sign/Information.component.jsx";
import { Icon } from "../../components/common/Icon.component.jsx";
import { useState } from "react";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useRef } from "react";

export const SchoolCardPage = () => {
  const [camera, setCamera] = useState("");
  const [canNext, setCanNext] = useState(false);
  const imageElement = useRef();

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    const imageUrl = image.webPath;
    // imageElement?.current?.src = imageUrl;
  };

  return (
    <MainContainer>
      <div className="mt-20">
        <SlidePannels maxLengh={3} selectedIndex={2} />
      </div>

      <div className="flex flex-col items-center">
        <SignInformation title={`당신의 학교를\n알고 싶어요`} />
        <div class="w-80 h-44 border-2 border-[#62AB05] rounded-xl"></div>
        <button
          className="border border-gray-400 rounded-full p-2 mt-28"
          onClick={takePicture}
        >
          <Icon type="camera" />
        </button>
        <img ref={imageElement.current}></img>
        <Txt typography="subtitle" colors="secondaryLight" className="my-3">
          학생증을 촬영해주세요
        </Txt>
      </div>

      <BottomFullLink title="인증하기" to={`/`} isActive={canNext} />
    </MainContainer>
  );
};
