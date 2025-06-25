export const getAllProducts = (req, res) => {
    res.json([
        { id: 1, name: 'Produto A', price: 100 },
        { id: 2, name: 'Produto B', price: 150 },
    ]);
};