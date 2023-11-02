import { useQuery } from "@tanstack/react-query";
import {
    getPaymoney,
} from "../apis/paymoney.apis.js";
import { ProductDto } from "../apis/dtos/product.dto.js";

/**
 * @param {import("@tanstack/react-query").UseQueryOptions} config
 * @return {{products: ProductDto[]}}
 */
export const useGetPaymoney = (config) => {
    const { data: paymoney } = useQuery(["allPaymoney"], () => getPaymoney(), {
        ...config,
        suspense: true,
    });
    return { paymoney };
};