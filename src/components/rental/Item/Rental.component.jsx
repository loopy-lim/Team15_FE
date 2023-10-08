import { useQuery } from "@tanstack/react-query";
import { Txt } from "../../common/Txt.component";
import { getProductById } from "../../../apis/product";
import { Button } from "../../common/Button.component";
import { Link } from "react-router-dom";

/**
 * @param {{
 *  data: import("../../../types/rental").rentalItem
 *  dayDiff: number
 * }}
 */
export const ItemRental = ({ data, dayDiff }) => {
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
      <div className="flex items-center justify-between">
        <div>
          <Txt typography="subtitle" className="font-bold">
            대여중
          </Txt>
          <Txt typography="subtitle" colors="secondary" className="font-bold">
            {`(${new Date(data.borrowAt).toLocaleDateString()} ~ ${new Date(
              data.returnAt
            ).toLocaleDateString()})`}
          </Txt>
        </div>
        <Txt typography="subtitle">
          반납까지{" "}
          <Txt typography="subtitle" colors="prmiary" className="font-bold">
            {dayDiff}일
          </Txt>{" "}
          남았습니다.
        </Txt>
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
        <div className="flex-1"></div>
        <Link className="flex-1">
          <Button className="flex-1" size="small" color="white">
            반납하기
          </Button>
        </Link>
      </div>
    </div>
  );
};
