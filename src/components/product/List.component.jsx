import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../../apis/product";
import { Br } from "../common/Br.component";
import { Txt } from "../common/Txt.component";
import { ProductItem } from "./Item.component";
import { Fragment } from "react";

export const ProductList = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery(["allProduct"], getAllProduct);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (isError) {
    return <div>에러</div>;
  }

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
