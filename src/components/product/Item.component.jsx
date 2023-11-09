import { Link } from "react-router-dom";
import { Icon } from "../common/Icon.component.jsx";
import { Txt } from "../common/Txt.component.jsx";
import { ProductDto } from "../../apis/dtos/product.dto.js";
import { koString } from "../../functions/localeString.js";

/**
 * @param {object} props
 * @param {ProductDto} props.data
 * @returns {React.FC}
 */
export const ProductItem = ({ data }) => {
  return (
    <Link
      className="py-4 flex gap-4 items-center text-left"
      to={`/product/${data.id}`}
    >
      <div className="min-w-fit h-32 w-32 overflow-hidden">
        <img
          className="aspect-square w-full h-full object-cover"
          src={data.productImagePath[0]}
          alt={data.productName}
        />
      </div>
      <div className="flex flex-col h-24 justify-between flex-1 min-w-0">
        <div className="flex flex-col gap-1 w-full">
          <Txt typography="h6" className="truncate">
            {data.productName}
          </Txt>
          <Txt
            typography="subtitle"
            colors="secondaryLight"
            className="font-light truncate"
          >
            {data.location}
          </Txt>
        </div>
        <div className="flex w-full justify-between">
          <Txt typography="h6" colors="secondary" className="truncate">
            {`${koString(data.rentalPrice)} / 일`}
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
