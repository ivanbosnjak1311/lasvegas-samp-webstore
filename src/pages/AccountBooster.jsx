import { useEffect } from "react";

import MainLayout from "../components/MainLayout";
import ProductList from "../components/ProductList";
import { products } from "../data/products";

export default function AccountBooster() {
  useEffect(() => {
      document.title = "Las Vegas | Account Booster";
  }, []);
  return (
    <MainLayout>
      <ProductList products={products.accountBooster} />
    </MainLayout>
  );
}