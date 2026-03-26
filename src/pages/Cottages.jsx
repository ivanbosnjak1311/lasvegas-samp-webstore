import { useEffect } from "react";

import MainLayout from "../components/MainLayout";
import ProductList from "../components/ProductList";
import { products } from "../data/products";

export default function Cottages() {
  useEffect(() => {
      document.title = "Las Vegas | Vikendice";
  }, []);
  return (
    <MainLayout>
      <ProductList products={products.cottages} />
    </MainLayout>
  );
}