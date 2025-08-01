import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  // State for controlled inputs
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce"); // default value

  function handleSubmit(event) {
    event.preventDefault();

    // Create new item object
    const newItem = {
      id: uuid(),
      name: name,
      category: category,
    };

    // Call parent callback with new item
    onItemFormSubmit(newItem);

    // Clear form inputs
    setName("");
    setCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}                      // controlled input
          onChange={e => setName(e.target.value)}  // update state on change
          required
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}                // controlled select
          onChange={e => setCategory(e.target.value)}
        >
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
