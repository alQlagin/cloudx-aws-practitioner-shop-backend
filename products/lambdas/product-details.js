import {getProduct} from "../products/products";

export const productDetails = async (event) => {
    const {id} = event.pathParameters;

    return await getProduct(id);
}
