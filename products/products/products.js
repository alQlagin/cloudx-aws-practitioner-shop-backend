import products from './products.mock.json'


export const loadProducts = async () => {
    return products
}

export const getProduct = async (id) => {
    id = Number(id);
    if (Number.isNaN(id)) return undefined;
    return products.find(product => product.id === id)
}
