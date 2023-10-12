import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../apis/product";
import { Txt } from "../common/Txt.component";
import { useAtom } from "jotai";
import { rentDateAtom } from "../../stores/rent.atom";
import { Br } from "../common/Br.component";

export const PaymoneyProduct = ({ id }) => {
  const { data: product } = useQuery(
    ["product", id],
    () => getProductById(id),
    { suspense: true }
  );
  const [rentData] = useAtom(rentDateAtom);

  return (
    <>
      <div className="flex justify-between py-6">
        <Txt typography="h5" className="font-normal">
          수령장소
        </Txt>
        <Txt typography="h5" colors="secondary">
          {product.location}
        </Txt>
      </div>
      <div>
        <div className="flex gap-2">
          <Txt>대여상품</Txt>
          <Txt typography="h6" className="text-[#979797]">
            {`(
            ${rentData.from?.toLocaleDateString()} ~ ${rentData.to?.toLocaleDateString()}
            )`}
          </Txt>
        </div>
        <div className="flex gap-2">
          <img
            className="w-24 h-24"
            src={product.productImagePath[0]}
            alt={product.name}
          />
          <div className="flex flex-col flex-1 py-2">
            <Txt typography="h6">{product.companyName}</Txt>
            <Txt>{product.name}</Txt>
          </div>
        </div>
        <Br />
      </div>
    </>
  );
};
