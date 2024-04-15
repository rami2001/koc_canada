const data = {
  produits: require("../data/produits.json"),
  setProduits: function (data) {
    this.produits = data;
  },
};

const getProduits = (req, res) => {
  res.json(data.produits);
};

module.exports = { getProduits };
