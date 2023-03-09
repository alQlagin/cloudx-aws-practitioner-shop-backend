import {productList} from './products-list'
import {loadProducts} from "../products/products";

jest.mock('../products/products', () => ({
    loadProducts: jest.fn(),
}))
describe('products list', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })
    it('should be defined', () => {
        expect(productList).toBeDefined();
    })
    it('should call load products', async () => {
        await productList();
        expect(loadProducts).toBeCalled()
    })
    it('should return loaded products', async () => {
        const products = [{id: 'test', name: 'mocked product'}]
        loadProducts.mockResolvedValue(products);

        const result = await productList();
        expect(result).toEqual(products)
    })
})
