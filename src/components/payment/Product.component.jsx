import { useAtom } from "jotai";
import { Txt } from "../common/Txt.component.jsx";
import { Br } from "../common/Br.component.jsx";
import { useGetProductById } from "../../hooks/useProductQuery.jsx";
import { rentDateAtom } from "../../stores/rent.atom.js";

export const PaymoneyProduct = ({ id }) => {
  const { product } = useGetProductById(id);
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
      <div className="flex flex-col gap-4">
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
            className="w-36 h-36 object-cover"
            src={product.productImagePath[0]}
            alt={product.name}
          />
          <div className="flex flex-col flex-1 py-2">
            <Txt typography="h6">{product.companyName}</Txt>
            <Txt>{product.productName}</Txt>
          </div>
        </div>
        <Br />
      </div>
    </>
  );
};
