import React from "react";
import Header from "../components/Header";
import PlantCard from "../components/PlantCard";
import plants from "../plants";

function ProductList() {
  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <>
      <Header />
      <div className="product-list-page">
        {categories.map((cat) => (
          <div key={cat} className="category-section">
            <h2>{cat}</h2>
            <div className="plant-grid">
              {plants
                .filter((p) => p.category === cat)
                .map((p) => (
                  <PlantCard key={p.id} plant={p} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
