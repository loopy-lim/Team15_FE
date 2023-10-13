import { Br } from "../common/Br.component";
import { Carousel } from "../common/Carousel.component";
import { ProductCompany } from "./Company.component";
import { Txt } from "../common/Txt.component";
import { useGetProductById } from "../../hooks/useProductQuery";

/**
 * @param {{
 *  id: string
 * }}
 * @returns {React.FC}
 */
export const ProductDetail = ({ id }) => {
  const { product } = useGetProductById(id);

  const {
    name,
    content,
    rentalPrice,
    regularPrice,
    location,
    category,
    companyName,
    productImagePath,
    companyImagePath,
  } = product;

  const carouselData = productImagePath.map((src, index) => ({
    img: { src, alt: `${name}${index}` },
  }));

  return (
    <>
      <Carousel data={carouselData} />
      <div className="py-4">
        <ProductCompany name={companyName} imagePath={companyImagePath} />
      </div>
      <Br />
      <article className="my-4">
        <Txt typography="h5">{name}</Txt>
        <div className="flex items-baseline justify-between">
          <Txt typography="h2">{`${rentalPrice} / 일`}</Txt>
          <Txt typography="subtitle">{`정가: ${regularPrice}원~`}</Txt>
        </div>
        <Txt
          typography="p"
          colors="secondaryLight"
          className="flex gap-2 items-center my-1"
        >
          {category}
          <div className="h-[2px] w-[2px] rounded-full bg-[#707070]"></div>
          {location}
        </Txt>
        <div className="my-4">{content}</div>
        <div className="w-[clac(3rem + env(safe-area-inset-bottom))]"></div>
      </article>
    </>
  );
};
