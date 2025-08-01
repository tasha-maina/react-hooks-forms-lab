import React, { useState } from "react";
import ShoppingList from "./ShoppingList";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Yogurt", category: "Dairy" },
    { id: 2, name: "Pomegranate", category: "Produce" },
    { id: 3, name: "Lettuce", category: "Produce" },
    { id: 4, name: "String Cheese", category: "Dairy" },
    { id: 5, name: "Swiss Cheese", category: "Dairy" },
    { id: 6, name: "Cookies", category: "Dessert" },
  ]);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="App">
      <ShoppingList items={items} onAddItem={handleAddItem} />
    </div>
  );
}

export default App;

