const products = [
    {
        "count": 4,
        "description": `Wedding pilaf is a proven hit of our menu. Even the most sophisticated gourmets from all over the world adore it! And you will learn the secret of this delicious pilaf immediately after visiting our establishment.`,
        "id": 1,
        "price": 2.78,
        "title": "To'y osh"
    },
    {
        "count": 4,
        "description": `Wedding pilaf is a proven hit of our menu. Even the most sophisticated gourmets from all over the world adore it! And you will learn the secret of this delicious pilaf immediately after visiting our establishment.`,
        "id": 2,
        "price": 3.66,
        "title": "To'y osh (komplekt)"
    },
    {
        "count": 6,
        "description": `Chaykhansky pilaf is a pilaf that will not leave anyone indifferent. Fragrant, perhaps the most delicious our traditional pilaf, made from selected meat, yellow carrots with the addition of onions and fragrant spices - it can't be better!`,
        "id": 3,
        "price": 2.96,
        "title": "Choyxona osh"
    },
    {
        "count": 6,
        "description": `Chaykhansky pilaf is a pilaf that will not leave anyone indifferent. Fragrant, perhaps the most delicious our traditional pilaf, made from selected meat, yellow carrots with the addition of onions and fragrant spices - it can't be better!`,
        "id": 4,
        "price": 3.83,
        "title": "Choyxona osh (komplekt)"
    },
    {
        "count": 12,
        "description": `Special pilaf - pilaf made with olive oil being one of our main dishes, it has a delicate texture and bright taste`,
        "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
        "price": 3.13,
        "title": "Special plov"
    },
    {
        "count": 12,
        "description": `Special pilaf - pilaf made with olive oil being one of our main dishes, it has a delicate texture and bright taste`,
        "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
        "price": 4.00,
        "title": "Special plov (komplekt)"
    }
]


export const loadProducts = async () => {
    return products
}

export const getProduct = async (id) => {
    id = Number(id);
    if (Number.isNaN(id)) return undefined;
    return products.find(product => product.id === id)
}
