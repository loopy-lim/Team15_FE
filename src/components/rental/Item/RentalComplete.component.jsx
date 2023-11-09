import { Link } from "react-router-dom";
import { Txt } from "../../common/Txt.component.jsx";
import { Button } from "../../common/Button.component.jsx";
import { RentalDto } from "../../../apis/dtos/rental.dto.js";

/**
 * @param {{
 *  data: RentalDto
 *  isReviewed: boolean
 * }}
 */
export const ItemRentalCompelete = ({ data, isReviewed }) => {
  return (
    <div className="flex flex-col gap-2 py-2">
      <div className="flex items-center">
        <div className="flex gap-2">
          <Txt className="font-bold">{data.status}</Txt>
          <Txt colors="secondary" className="font-bold">
            {`(${new Date(data.startAt).toLocaleDateString()} ~ ${new Date(
              data.endAt
            ).toLocaleDateString()})`}
          </Txt>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 object-cover aspect-square h-36 w-36">
          <img src={data.productImagePath} alt={data.productName} />
        </div>
        <div className="flex flex-[4_0_0] flex-col gap-2">
          <div className="flex flex-col">
            <Txt typography="h6">{data.productName}</Txt>
          </div>
          <Txt>1개</Txt>
          <div className="flex gap-4">
            <Link className="flex-1" to={`/rent-period/${data.productId}`}>
              <Button size="small" color="white">
                재대여
              </Button>
            </Link>
            {!isReviewed ? (
              <Link className="flex-1" to={`/review/${data.rentalId}`}>
                <Button size="small" color="white">
                  리뷰쓰기
                </Button>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
