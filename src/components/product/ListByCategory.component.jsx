import { Br } from "../common/Br.component";
import { Txt } from "../common/Txt.component";
import { ProductItem } from "./Item.component";
import { Fragment } from "react";
import { useGetProductByCategory } from "../../hooks/useProductQuery";

/**
 * @param {string} category
 */
export const ProductListByCategory = ({ category }) => {
  const { products } = useGetProductByCategory(category);

  return (
    <section>
      <Br />
      {products.map((product) => (
        <Fragment key={product.id}>
          <ProductItem data={product} />
          <Br />
        </Fragment>
      ))}
      <Txt
        typography="h4"
        colors="secondary"
        className="flex justify-center text-center pt-4 pb-8"
      >
        더이상 제품이 없어요
      </Txt>
    </section>
  );
};
