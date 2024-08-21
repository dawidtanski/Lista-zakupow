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

  function handleAddProduct(newProduct) {
    setProductsList((newProduct) => [...productsList, newProduct]);
  }

  return (
    <div className="app">
      <Header />
      <div className="shopping-app">
        <div className="sidebar">
          <ShoppingList productsList={productsList} />
          <Button onClick={handleAddProduct}>Dodaj produkt</Button>
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

function ShoppingList() {
  return (
    <div className="shopping-list">
      <ol>
        <li>Woda</li>
        <li>maslo klarowane</li>
        <li>olej rzepakowy</li>
      </ol>
    </div>
  );
}

function HelperList({ onAddProduct }) {
  return (
    <ul className="helper-list">
      {initialItems.map((item) => (
        <li key={item} onClick={() => onAddProduct(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}
