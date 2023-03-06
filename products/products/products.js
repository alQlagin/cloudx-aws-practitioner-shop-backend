const products = [
    {id: 1, name: 'Toy osh'},
    {id: 2, name: 'Choyxona osh'}
]

export const loadProducts = async () => {
    return products
}

export const getProduct = async (id) => {
    id = Number(id);
    if (Number.isNaN(id)) return undefined;
    return products.find(product => product.id === id)
}
