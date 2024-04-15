import useFetch from "./useFetch";

const useFetchProduits = () => {
  const { data, loading, error } = useFetch("http://localhost:5000/produits");
  return { produits: data, loading, error };
};

export default useFetchProduits;
