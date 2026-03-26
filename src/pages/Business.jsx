import { useEffect } from "react";

import MainLayout from "../components/MainLayout";
import ProductList from "../components/ProductList";
import { products } from "../data/products";

export default function Business() {
  useEffect(() => {
      document.title = "Las Vegas | Firma";
  }, []);
  return (
    <MainLayout>
      <ProductList products={products.business} />
    </MainLayout>
  );
}