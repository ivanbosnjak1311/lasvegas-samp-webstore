import { useEffect } from "react";

import MainLayout from "../components/MainLayout";
import ProductList from "../components/ProductList";
import { products } from "../data/products";

export default function Apartments() {
  useEffect(() => {
      document.title = "Las Vegas | Stanovi";
  }, []);
  return (
    <MainLayout>
      <ProductList products={products.apartments} />
    </MainLayout>
  );
}