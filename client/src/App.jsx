import useFetchProduits from "./hooks/useFetchProduits";

const App = () => {
  const { produits, loading, error } = useFetchProduits();

  if (loading) {
    return <div>Chargement ...</div>;
  }

  if (error) {
    return <div>Erreur: {produitsErreur || accueilErreur}</div>;
  }

  return (
    <>
      {produits.map((produit) => (
        <div key={produit._id}>
          <article>
            <h1>@{produit._id}</h1>
            <h2>{produit.nom}</h2>
            <p>{produit.note}</p>
          </article>
          <hr />
        </div>
      ))}
    </>
  );
};

export default App;
