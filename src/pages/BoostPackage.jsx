import { useEffect } from "react";

import MainLayout from "../components/MainLayout";
import ProductList from "../components/ProductList";
import { products } from "../data/products";

export default function BoostPackage() {
  useEffect(() => {
      document.title = "Las Vegas | Boost Paketi";
  }, []);
  return (
    <MainLayout>
        <ProductList products={products.boostPackages} />
    </MainLayout>
  );
}