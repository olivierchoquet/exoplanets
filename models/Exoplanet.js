
const exoplanetsTable = [
  { uniqueName: "TRAPPIST-1-d", hClass: "Mésoplanète", discoveryYear: 2016 },
  { uniqueName: "KOI-1686.01", hClass: "Mésoplanète", discoveryYear: 2011 },
  { uniqueName: "LHS 1723 b", hClass: "Mésoplanète", discoveryYear: 2017 },
];

module.exports.list = () => exoplanetsTable;

module.exports.save = (data) => {
  exoplanetsTable.push(data);
};

module.exports.search = (uniqueName) => {
  // Initialiser le tableau à vide sinon -> appel push -> cannot read property of null
  const exoplanetList = [];
  for (let exoplanet of exoplanetsTable) {
    if (exoplanet.uniqueName.toUpperCase().startsWith(uniqueName.toUpperCase())) {
      console.log("trouvé " + JSON.stringify(exoplanet));
      exoplanetList.push(exoplanet)
    }
  }
  return exoplanetList;
};

// On peut également écrire :
// module.exports.search = uniqueName => exoplanetsTable.filter(exoplanet => exoplanet.uniqueName.toUpperCase().startsWith(uniqueName.toUpperCase()))