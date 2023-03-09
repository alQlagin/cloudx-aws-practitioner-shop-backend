import {productDetails} from './product-details'
import {getProduct} from "../products/products";

jest.mock('../products/products', () => ({
    getProduct: jest.fn(),
}))
describe('product details', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })
    it('should be defined', () => {
        expect(productDetails).toBeDefined();
    })
    it('should call get product', async () => {
        await productDetails({pathParameters: {id: 1}});
        expect(getProduct).toBeCalled()
    })
    it('should return product if exists', async () => {
        const product = {id: 1, name: 'mock'}
        getProduct.mockResolvedValue(product);

        const result = await productDetails({pathParameters: {id: 1}});
        expect(result).toEqual(product)
    })
    it('should return 404 if product not exists', async () => {
        getProduct.mockResolvedValue(undefined);

        const result = await productDetails({pathParameters: {id: 1}});
        expect(result).toHaveProperty('statusCode', '404')
        expect(result).toHaveProperty('body', JSON.stringify({errorMessage: 'Product not found'}))
    })

    it('should return 400 if id not provided', async () => {
        const result = await productDetails();
        expect(result).toHaveProperty('statusCode', '400')
        expect(result).toHaveProperty('body', JSON.stringify({errorMessage: 'Id not provided'}))
    })
})
