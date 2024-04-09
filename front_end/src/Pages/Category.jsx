import React, { useEffect, useState } from "react";
import axios from "axios";

function Category() {
  const [cate, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/categories?populate=*"
        );
        setCategory(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategory();
  }, []);
  console.log();
  return (
    <div className="category">
      {cate.map((item) => (
        <ul key={item.id}>
          <p>{item.attributes.category_name}</p>
          <li>
            {Array.isArray(item.attributes.subcategories) &&
              item.attributes.subcategories.map((sub) => (
                <a href="/" key={sub.id}>
                  {sub.subcategory_name}
                </a>
              ))}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Category;
