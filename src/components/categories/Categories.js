import React from "react";
import { Card } from "@mui/material";
import categoriesData from "./CategoriesData";
import "./categories.css";

const Categories = () => {
  return (
    <>
      <div>
        <Card className='categories-card' sx={{ borderRadius: 0, boxShadow: 0, margin: 2, padding: '60px' }}>
          {categoriesData.map((Category) => (
            <div key={Category.id}>
              <img src={Category.image} alt={Categories.name} />
              <h2>{Category.name}</h2>
            </div>
          ))}
        </Card>
      </div>
    </>
  )
};

export default Categories;