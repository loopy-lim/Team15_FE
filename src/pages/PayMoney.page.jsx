import { useParams } from "react-router-dom";
import { ProductDetail } from "../components/product/Detail.component";
import { BASE_PADDING } from "../constants";
import { isIOS, isMobile } from "react-device-detect";
import classnames from "classnames";
import { AppBar } from "../components/common/AppBar.component";
import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { MainContainer } from "../components/common/MainContainer.component";

export const PayMoneyPage = () => {
  const { id } = useParams();

  return (
    <>
      <AppBar to="/mypage/paymoney" />
      <MainContainer hasBottomFullLink={true}>
        <ProductDetail id={id} />
        <BottomFullLink title="페이머니" to={`/rental/${id}`} br={true} />
      </MainContainer>
    </>
  );
};
