import { useEffect, useState } from "react";
import "./Categories.css";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const url = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`${url}/api/categories`);
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        }
      } catch (error) {
        console.log("Veri Hatası", error);
      }
    };
    fetchCategory();
  }, [url]);

  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>All Categories</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <ul className="category-list">
          {categories.map((category) => (
            <CategoryItem category={category} key={category._id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
