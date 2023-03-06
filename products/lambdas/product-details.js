import {getProduct} from "../products/products";

export const productDetails = async (event) => {
    const {id} = event.pathParameters;

    let product = await getProduct(id);
    if (product)
        return product;

    return {
        statusCode: '404',
        body: JSON.stringify({errorMessage: 'Product not found'})
    }
}
