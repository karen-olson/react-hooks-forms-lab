import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, formData, setFormData }) {
  function handleChange(e) {
    const name = e.target.name;
    const category = e.target.value;

    setFormData({
      ...formData,
      [name]: category,
    });
  }

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: formData.name,
    category: formData.category,
  };

  return (
    // This did NOT work -- why?? onSubmit={(e, newItem) => onItemFormSubmit(e, newItem)
    <form className="NewItem" onSubmit={(e) => onItemFormSubmit(e, newItem)}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} value={formData.value}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
