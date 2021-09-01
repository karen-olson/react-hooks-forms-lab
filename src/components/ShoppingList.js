import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  });

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function onItemFormSubmit(newItem) {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  }

  const itemsToDisplay = items
    .filter((item) => item.name.includes(search))
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    });

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={onItemFormSubmit}
        formData={formData}
        setFormData={setFormData}
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        search={search}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
