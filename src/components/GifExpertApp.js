import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  /*   const handleAdd = () => {
    setCategories([...categories, "goku"]);
  }; */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}
