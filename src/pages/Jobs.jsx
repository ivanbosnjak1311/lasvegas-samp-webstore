import { useEffect } from "react";

import MainLayout from "../components/MainLayout";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Jobs() {
  useEffect(() => {
      document.title = "Las Vegas | Poslovi";
  }, []);
  return (
    <MainLayout>
        <div className="product-grid">
            {products.jobs.map(p => (
                <ProductCard 
                    key={p.id} 
                    name={p.name} 
                    price={p.price} 
                    image={p.image}
                />
            ))}
        </div>
    </MainLayout>
  );
}