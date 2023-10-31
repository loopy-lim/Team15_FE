import { Txt } from "../../common/Txt.component.jsx";
import { Button } from "../../common/Button.component.jsx";
import { Link } from "../../common/Link.component.jsx";
import { useGetProductById } from "../../../hooks/useProductQuery.jsx";
import { RentalDto } from "../../../apis/dtos/rental.dto.js";

/**
 * @param {{
 *  data: RentalDto
 * }}
 */
export const ItemRentalSchedule = ({ data }) => {
  const { product } = useGetProductById(data.productId);

  return (
    <div className="flex flex-col gap-2 py-12">
      <div className="flex items-center">
        <div>
          <Txt className="font-bold">예약중</Txt>
          <Txt colors="secondary" className="font-bold">
            {`(${new Date(data.borrowAt).toLocaleDateString()} ~ ${new Date(
              data.returnAt
            ).toLocaleDateString()})`}
          </Txt>
        </div>
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
        <Link className="flex-1">
          <Button size="small" color="white">
            재대여
          </Button>
        </Link>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};
