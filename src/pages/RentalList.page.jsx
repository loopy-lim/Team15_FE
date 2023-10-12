import { AppBar } from "../components/common/AppBar.component";
import { MainContainer } from "../components/common/MainContainer.component";
import { RentalList } from "../components/rental/List.component";

export const RentalListPage = () => {
  return (
    <>
      <AppBar title="대여내역" to="/" />
      <MainContainer hasBottomFullLink={false}>
        <RentalList />
      </MainContainer>
    </>
  );
};
