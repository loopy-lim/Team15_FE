import { Link } from "react-router-dom";
import { Icon } from "../common/Icon.component";
import { Txt } from "../common/Txt.component";
import { ProductDto } from "../../apis/dtos/product.dto";

/**
 * @param {object} props
 * @param {ProductDto} props.data
 * @returns {React.FC}
 */
export const ProductItem = ({ data }) => {
  return (
    <Link
      className="py-4 flex gap-4 text-left w-full"
      to={`/product/${data.id}`}
    >
      <div className="h-20 w-20 overflow-hidden">
        <img
          className="aspect-square w-full h-full object-cover"
          src={data.productImagePath[0]}
          alt={data.productName}
        />
      </div>
      <div className="flex flex-col h-20 justify-between flex-1">
        <div className="flex flex-col gap-1 w-full truncate">
          <Txt typography="h6">{data.productName}</Txt>
          <Txt
            typography="subtitle"
            colors="secondaryLight"
            className="font-light"
          >
            {data.location}
          </Txt>
        </div>
        <div className="flex w-full justify-between">
          <Txt typography="h6" colors="secondary">
            {`${data.rentalPrice} / 일`}
          </Txt>
          <div className="flex items-center gap-1">
            <Icon type="message" size="small" />
            <Txt typography="p">{data.review}</Txt>
          </div>
        </div>
      </div>
    </Link>
  );
};
