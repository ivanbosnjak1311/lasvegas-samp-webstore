import { useEffect } from "react";

import MainLayout from "../components/MainLayout";
import ProductList from "../components/ProductList";
import { products } from "../data/products";

export default function Houses() {
  useEffect(() => {
      document.title = "Las Vegas | Kuce";
  }, []);
  return (
    <MainLayout>
      <ProductList products={products.houses} />
    </MainLayout>
  );
}