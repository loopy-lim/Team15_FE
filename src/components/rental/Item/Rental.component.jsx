import { Txt } from "../../common/Txt.component";
import { Button } from "../../common/Button.component";
import { Link } from "react-router-dom";
import { useGetProductById } from "../../../hooks/useProductQuery";

/**
 * @param {{
 *  data: import("../../../types/rental").rentalItem
 *  dayDiff: number
 * }}
 */
export const ItemRental = ({ data, dayDiff }) => {
  const { product } = useGetProductById(data.productId);

  return (
    <div className="flex flex-col gap-2 py-12">
      <div className="flex flex-col">
        <div>
          <Txt className="font-bold">대여중</Txt>
          <Txt colors="secondary" className="font-bold">
            {`(${new Date(data.borrowAt).toLocaleDateString()} ~ ${new Date(
              data.returnAt
            ).toLocaleDateString()})`}
          </Txt>
        </div>
        <Txt>
          반납까지{" "}
          <Txt colors="prmiary" className="font-bold">
            {dayDiff}일
          </Txt>{" "}
          남았습니다.
        </Txt>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 object-cover aspect-square">
          <img src={product.productImagePath[0]} alt={product.name} />
        </div>
        <div className="flex flex-col gap-2 flex-[4_0_0] min-w-max">
          <div className="flex flex-col">
            <Txt typography="h6">{product.companyName}</Txt>
            <Txt>{product.name}</Txt>
          </div>
          <Txt>1개</Txt>
        </div>
      </div>
      <div className="flex gap-4">
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
