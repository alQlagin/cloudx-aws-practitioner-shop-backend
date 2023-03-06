import {loadProducts} from "../products/products";

export const productList = async () => {
    return await loadProducts()
}

