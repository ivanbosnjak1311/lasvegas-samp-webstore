import { useEffect } from "react";

import MainLayout from "../components/MainLayout";
import ProductList from "../components/ProductList";
import { products } from "../data/products";

export default function Gunshop() {
  useEffect(() => {
      document.title = "Las Vegas | Gun Shop";
  }, []);
  return (
    <MainLayout>
      <ProductList products={products.gunshop} />
    </MainLayout>
  );
}