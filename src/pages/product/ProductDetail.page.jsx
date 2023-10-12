import { useParams } from "react-router-dom";
import { ProductDetail } from "../../components/product/Detail.component";
import { AppBar } from "../../components/common/AppBar.component";
import { BottomFullLink } from "../../components/common/BottomFullLink.component";
import { MainContainer } from "../../components/common/MainContainer.component";

export const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <AppBar to="/" />
      <MainContainer>
        <ProductDetail id={id} />
        <BottomFullLink title="대여하기" to={`/rent-period/${id}`} br={true} />
      </MainContainer>
    </>
  );
};
