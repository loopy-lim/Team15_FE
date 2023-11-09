import { Link } from "react-router-dom";
import { Txt } from "../../common/Txt.component.jsx";
import { Button } from "../../common/Button.component.jsx";
import { RentalDto } from "../../../apis/dtos/rental.dto.js";
import { useCreateReturn } from "../../../hooks/useRentalQuery.jsx";
import { useQueryClient } from "@tanstack/react-query";

/**
 * @param {{
 *  data: RentalDto
 *  dayDiff: number
 * }}
 */
export const ItemRental = ({ data }) => {
  const { mutationReturn } = useCreateReturn();
  const queryClient = useQueryClient();

  const onReturn = () => {
    mutationReturn(
      { rentalId: data.rentalId },
      {
        onSettled: () => {
          queryClient.invalidateQueries("rental");
        },
      }
    );
  };

  const dayDiff = Math.floor(
    (new Date(data.endAt) - new Date(data.startAt)) / (1000 * 60 * 60 * 24)
  );
  return (
    <div className="flex flex-col gap-2 py-2">
      <div className="flex flex-col">
        <div className="flex gap-2">
          <Txt className="font-bold">대여중</Txt>
          <Txt colors="secondary" className="font-bold">
            {`(${new Date(data.startAt).toLocaleDateString()} ~ ${new Date(
              data.endAt
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
        <div className="object-cover aspect-square w-36 h-36">
          <img src={data.productImagePath} alt={data.productName} />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <div className="flex flex-col">
            <Txt typography="h6">{data.productName}</Txt>
          </div>
          <Txt>1개</Txt>
          <div className="flex gap-4">
            <div className="flex-1"></div>
            <Link className="flex-1">
              <Button
                className="flex-1"
                size="small"
                color="white"
                onClick={onReturn}
              >
                반납하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
