import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../../apis/product";
import { Br } from "../common/Br.component";
import { Txt } from "../common/Txt.component";
import { ProductItem } from "./Item.component";
import { Fragment } from "react";

export const ProductList = () => {
  const { data: products } = useQuery(["allProduct"], getAllProduct, {
    suspense: true,
  });

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
