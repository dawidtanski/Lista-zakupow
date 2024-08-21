import "./index.css";
import React from "react";
import { useState } from "react";

const initialItems = [
  "chleb",
  "bulki",
  "maslo",
  "mleko",
  "pomidory",
  "ogorki",
  "maka",
  "jablka",
  "pomarancze",
  "ryz",
  "ziemniaki",
  "jaja",
  "makaron",
  "cebula",
  "mięso",
  "banany",
  "jogurt",
  "ser",
  "mozarella",
  "szynka",
  "kielbasa",
  "papryka",
  "salata",
  "sól",
  "cukier",
  "pieprz",
  "herbata",
  "kawa",
  "soda oczyszczona",
  "proszek do p.",
  "kakao",
  "miód",
  "papier toaletowy",
  "pianka do golenia",
  "mydlo",
  "proszek do prania",
  "zel pod prysznic",
  "szampon",
  "kapsulki do zmyw.",
  "domestos",
];

export default function App() {
  const [productsList, setProductsList] = useState([]);
  const [newProductName, setNewProductName] = useState("");
  const [showInput, setShowInput] = useState(false);

  function handleAddProduct(newProduct) {
    setProductsList((productsList) => [...productsList, newProduct]);
  }

  function handleShowInput() {
    setShowInput(true);
  }

  function handleProductNameChange(event) {
    setNewProductName(event.target.value);
  }

  function handleProductSubmit() {
    if (newProductName.trim() !== "") {
      handleAddProduct(newProductName);
      setNewProductName("");
      setShowInput(false);
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleProductSubmit();
    }
  }

  return (
    <div className="app">
      <Header />
      <div className="shopping-app">
        <div className="sidebar">
          <ShoppingList productsList={productsList} />
          <Button onClick={handleShowInput}>Dodaj produkt</Button>
          {showInput && (
            <div className="input-container">
              <input
                type="text"
                value={newProductName}
                onChange={handleProductNameChange}
                placeholder="Wpisz nazwę produktu"
                onKeyDown={handleKeyPress}
              ></input>
              <Button onClick={handleProductSubmit}>Zapisz</Button>
            </div>
          )}
        </div>
        <HelperList onAddProduct={handleAddProduct} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src="./logo.png" alt="logo" className="logo"></img>
      <div className="header-text">
        <h1>Lista zakupów</h1>
        <h3>
          Przygotuj się na zakupy z moją aplikacją - nie zapomnisz niczego !
        </h3>
      </div>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function ShoppingList({ productsList }) {
  return (
    <div className="shopping-list">
      <ol>
        <li>Woda</li>
        <li>maslo klarowane</li>
        <li>olej rzepakowy</li>
        {productsList.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ol>
    </div>
  );
}

function HelperList({ onAddProduct }) {
  const [clickedItems, setClickedItems] = useState({});

  function handleItemClick(item) {
    if (!clickedItems[item]) onAddProduct(item);

    setClickedItems((ClickedItems) => ({
      ...ClickedItems,
      [item]: true,
    }));
  }

  return (
    <ul className="helper-list">
      {initialItems.map((item) => (
        <li
          key={item}
          onClick={() => handleItemClick(item)}
          className={`helper-item ${clickedItems[item] ? "flipped" : ""}`}
        >
          <div className="helper-item-content">
            <div className="helper-item-front">{item}</div>
            <div className="helper-item-back"></div>
          </div>
        </li>
      ))}
    </ul>
  );
}
