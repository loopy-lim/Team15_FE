import { useQuery } from "@tanstack/react-query";
import { Txt } from "../../common/Txt.component";
import { getProductById } from "../../../apis/product";
import { Button } from "../../common/Button.component";

/**
 * @param {{
 *  data: import("../../../types/rental").rentalItem
 * }}
 */
export const ItemRentalSchedule = ({ data }) => {
  const {
    data: productData,
    isError,
    isLoading,
  } = useQuery(["product", data.productId], () =>
    getProductById(data.productId)
  );

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <div className="flex flex-col gap-2 py-12">
      <div className="flex items-center">
        <div>
          <Txt typography="subtitle" className="font-bold">
            예약중
          </Txt>
          <Txt typography="subtitle" colors="secondary" className="font-bold">
            {`(${new Date(data.borrowAt).toLocaleDateString()} ~ ${new Date(
              data.returnAt
            ).toLocaleDateString()})`}
          </Txt>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 object-cover aspect-square">
          <img src={productData.productImagePath[0]} alt={productData.name} />
        </div>
        <div className="flex flex-col gap-2 flex-[4_0_0] min-w-max">
          <div className="flex flex-col">
            <Txt typography="h6">{productData.companyName}</Txt>
            <Txt>{productData.name}</Txt>
          </div>
          <Txt>1개</Txt>
        </div>
      </div>
      <div className="flex px-8 gap-4">
        <Button className="flex-1" size="small" color="white">
          재대여
        </Button>
        <div className="flex-1  px-4"></div>
      </div>
    </div>
  );
};
