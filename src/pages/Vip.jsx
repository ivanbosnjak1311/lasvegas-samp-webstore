import { useEffect } from "react";

import MainLayout from "../components/MainLayout";
import ProductList from "../components/ProductList";
import { products } from "../data/products";

export default function Vip() {
  useEffect(() => {
    document.title = "Las Vegas | VIP";
  }, []);
  return (
    <MainLayout>
      <ProductList products={products.vip} />
    </MainLayout>
  );
}