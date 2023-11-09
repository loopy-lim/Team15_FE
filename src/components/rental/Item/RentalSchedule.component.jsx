import { Txt } from "../../common/Txt.component.jsx";
import { Button } from "../../common/Button.component.jsx";
import { Link } from "../../common/Link.component.jsx";
import { RentalDto } from "../../../apis/dtos/rental.dto.js";

/**
 * @param {{
 *  data: RentalDto
 * }}
 */
export const ItemRentalSchedule = ({ data }) => {
  return (
    <div className="flex flex-col gap-2 py-2">
      <div className="flex items-center">
        <div className="flex gap-2">
          <Txt className="font-bold">예약중</Txt>
          <Txt colors="secondary" className="font-bold">
            {`(${new Date(data.startAt).toLocaleDateString()} ~ ${new Date(
              data.endAt
            ).toLocaleDateString()})`}
          </Txt>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 object-cover aspect-square">
          <img src={data.productImagePath[0]} alt={data.productName} />
        </div>
        <div className="flex flex-col gap-2 flex-[4_0_0] min-w-max">
          <div className="flex flex-col">
            <Txt typography="h6">{data.productName}</Txt>
          </div>
          <Txt>1개</Txt>
          <div className="flex gap-4">
            <Link className="flex-1">
              <Button size="small" color="white">
                재대여
              </Button>
            </Link>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
